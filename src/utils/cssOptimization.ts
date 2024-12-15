interface CriticalCSSOptions {
  minify?: boolean;
  inline?: boolean;
  preload?: boolean;
}

class CSSOptimizer {
  private static instance: CSSOptimizer;
  private loadedStyles: Set<string>;
  private criticalCSS: string;

  private constructor() {
    this.loadedStyles = new Set();
    this.criticalCSS = '';
  }

  public static getInstance(): CSSOptimizer {
    if (!CSSOptimizer.instance) {
      CSSOptimizer.instance = new CSSOptimizer();
    }
    return CSSOptimizer.instance;
  }

  // Extract critical CSS
  public extractCriticalCSS(): string {
    if (typeof window === 'undefined') return '';

    const criticalStyles: string[] = [];
    const viewportHeight = window.innerHeight;

    // Get all elements in viewport
    const elements = document.querySelectorAll('*');
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < viewportHeight) {
        const styles = window.getComputedStyle(element);
        const criticalProperties = [
          'display',
          'position',
          'top',
          'left',
          'width',
          'height',
          'margin',
          'padding',
          'background',
          'color',
          'font-family',
          'font-size',
          'font-weight'
        ];

        const elementStyles = criticalProperties
          .map(prop => `${prop}: ${styles.getPropertyValue(prop)};`)
          .join(' ');

        criticalStyles.push(`${element.tagName.toLowerCase()} { ${elementStyles} }`);
      }
    });

    this.criticalCSS = criticalStyles.join('\n');
    return this.criticalCSS;
  }

  // Load CSS dynamically
  public async loadCSS(href: string, options: { async?: boolean; defer?: boolean } = {}): Promise<void> {
    if (this.loadedStyles.has(href)) return;

    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;

      if (options.async) {
        link.media = 'print';
        link.onload = () => {
          link.media = 'all';
          this.loadedStyles.add(href);
          resolve();
        };
      } else {
        link.onload = () => {
          this.loadedStyles.add(href);
          resolve();
        };
      }

      link.onerror = reject;

      if (options.defer) {
        requestIdleCallback(() => document.head.appendChild(link));
      } else {
        document.head.appendChild(link);
      }
    });
  }

  // Inline critical CSS
  public inlineCriticalCSS(options: CriticalCSSOptions = {}): void {
    const criticalStyles = options.minify ? this.minifyCSS(this.criticalCSS) : this.criticalCSS;
    
    const style = document.createElement('style');
    style.id = 'critical-css';
    style.innerHTML = criticalStyles;
    document.head.insertBefore(style, document.head.firstChild);
  }

  // Minify CSS
  private minifyCSS(css: string): string {
    return css
      .replace(/\s+/g, ' ')
      .replace(/{\s+/g, '{')
      .replace(/}\s+/g, '}')
      .replace(/;\s+/g, ';')
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .trim();
  }

  // Preload CSS
  public preloadCSS(href: string): void {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = href;
    document.head.appendChild(link);
  }

  // Remove unused CSS
  public removeUnusedCSS(): void {
    const styleSheets = Array.from(document.styleSheets);
    styleSheets.forEach(sheet => {
      try {
        const rules = Array.from(sheet.cssRules);
        rules.forEach((rule, index) => {
          if (rule instanceof CSSStyleRule) {
            try {
              document.querySelector(rule.selectorText);
            } catch {
              sheet.deleteRule(index);
            }
          }
        });
      } catch (e) {
        console.warn('Could not analyze stylesheet:', e);
      }
    });
  }

  // Generate scoped CSS
  public generateScopedCSS(css: string, scope: string): string {
    return css.replace(/([^}]*){([^}]*)}/g, (match, selector, rules) => {
      const scopedSelector = selector
        .split(',')
        .map((s: string) => `${scope} ${s.trim()}`)
        .join(',');
      return `${scopedSelector}{${rules}}`;
    });
  }
}

// Export singleton instance
export const cssOptimizer = CSSOptimizer.getInstance(); 