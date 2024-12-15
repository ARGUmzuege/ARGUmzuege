import { Request, Response, NextFunction } from 'express';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';

interface SecurityOptions {
  enableHSTS?: boolean;
  enableCSP?: boolean;
  enableXFrame?: boolean;
  enableXSS?: boolean;
}

interface CompressionOptions {
  level?: number;
  threshold?: number;
  filter?: (req: Request, res: Response) => boolean;
}

interface CacheOptions {
  maxAge?: number;
  sMaxAge?: number;
  includeSubDomains?: boolean;
  preload?: boolean;
}

class ServerOptimizer {
  private static instance: ServerOptimizer;

  private constructor() {}

  public static getInstance(): ServerOptimizer {
    if (!ServerOptimizer.instance) {
      ServerOptimizer.instance = new ServerOptimizer();
    }
    return ServerOptimizer.instance;
  }

  // Configure security middleware
  public configureSecurityMiddleware(options: SecurityOptions = {}) {
    const middleware = [];

    // Basic security headers
    middleware.push(helmet());

    // CORS configuration
    middleware.push(cors({
      origin: process.env.ALLOWED_ORIGINS?.split(',') || '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true
    }));

    // HSTS
    if (options.enableHSTS) {
      middleware.push(helmet.hsts({
        maxAge: 31536000,
        includeSubDomains: true,
        preload: true
      }));
    }

    // Content Security Policy
    if (options.enableCSP) {
      middleware.push(helmet.contentSecurityPolicy({
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'", "'unsafe-inline'"],
          styleSrc: ["'self'", "'unsafe-inline'"],
          imgSrc: ["'self'", 'data:', 'https:'],
          connectSrc: ["'self'", 'https://api.example.com'],
          fontSrc: ["'self'", 'https://fonts.gstatic.com'],
          objectSrc: ["'none'"],
          mediaSrc: ["'self'"],
          frameSrc: ["'none'"]
        }
      }));
    }

    return middleware;
  }

  // Configure compression
  public configureCompression(options: CompressionOptions = {}) {
    return compression({
      level: options.level || 6,
      threshold: options.threshold || 1024,
      filter: options.filter || ((req, res) => {
        if (req.headers['x-no-compression']) {
          return false;
        }
        return compression.filter(req, res);
      })
    });
  }

  // Configure caching
  public configureCaching(options: CacheOptions = {}) {
    return (req: Request, res: Response, next: NextFunction) => {
      const maxAge = options.maxAge || 86400; // 1 day default
      const sMaxAge = options.sMaxAge || 604800; // 1 week default

      // Static assets caching
      if (req.url.match(/\.(css|js|jpg|jpeg|png|gif|ico|woff|woff2|ttf|eot)$/)) {
        res.setHeader('Cache-Control', `public, max-age=${maxAge}, s-maxage=${sMaxAge}`);
      } else {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      }

      next();
    };
  }

  // Configure CDN
  public configureCDN() {
    return (req: Request, res: Response, next: NextFunction) => {
      // Add CDN headers
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Timing-Allow-Origin', '*');

      // Handle CDN-specific headers
      if (req.headers['cdn-loop']) {
        res.setHeader('CDN-Cache-Control', 'max-age=3600');
      }

      next();
    };
  }

  // Performance monitoring middleware
  public performanceMonitoring() {
    return (req: Request, res: Response, next: NextFunction) => {
      const start = process.hrtime();

      res.on('finish', () => {
        const [seconds, nanoseconds] = process.hrtime(start);
        const duration = seconds * 1000 + nanoseconds / 1000000;

        console.log({
          method: req.method,
          url: req.url,
          statusCode: res.statusCode,
          duration: `${duration.toFixed(2)}ms`
        });
      });

      next();
    };
  }

  // Rate limiting
  public rateLimit(windowMs: number = 15 * 60 * 1000, max: number = 100) {
    const requests = new Map();

    return (req: Request, res: Response, next: NextFunction) => {
      const ip = req.ip;
      const now = Date.now();

      if (!requests.has(ip)) {
        requests.set(ip, []);
      }

      const userRequests = requests.get(ip);
      const validRequests = userRequests.filter(time => now - time < windowMs);

      if (validRequests.length >= max) {
        res.status(429).json({
          error: 'Too many requests, please try again later.'
        });
        return;
      }

      validRequests.push(now);
      requests.set(ip, validRequests);

      next();
    };
  }

  // Error handling middleware
  public errorHandler() {
    return (err: Error, req: Request, res: Response, next: NextFunction) => {
      console.error(err.stack);

      res.status(500).json({
        error: process.env.NODE_ENV === 'production'
          ? 'Internal Server Error'
          : err.message
      });
    };
  }
}

// Export singleton instance
export const serverOptimizer = ServerOptimizer.getInstance(); 