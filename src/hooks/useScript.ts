import { useEffect, useState } from 'react';

interface CustomHTMLScriptElement extends HTMLScriptElement {
  [key: string]: unknown;
}

interface ScriptOption {
  [key: string]: string;
}

export function useScript(src: string, option?: ScriptOption) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let script = document.querySelector(`script[src="${src}"]`) as CustomHTMLScriptElement;

    if (!script) {
      script = document.createElement('script') as CustomHTMLScriptElement;
      script.src = src;
      script.async = true;
    }

    if (option) {
      const keys = Object.keys(option);
      keys.forEach((key) => {
        script[key] = option[key];
      });
    }

    const handleLoad = () => setLoading(false);
    const handleError = (e: ErrorEvent) => {
      setError(e.error);
    };

    script.addEventListener('load', handleLoad);
    script.addEventListener('error', handleError);

    document.body.appendChild(script);

    return () => {
      if (script) {
        script.removeEventListener('load', handleLoad);
        script.removeEventListener('error', handleError);
        document.body.removeChild(script);
      }
    };
  }, [src, option]);

  return [loading, error];
}
