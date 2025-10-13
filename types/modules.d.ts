declare module "lucide-react" {
  export const Moon: any;
  export const Sun: any;
  export const Github: any;
  export const Linkedin: any;
  export const Twitter: any;
  export const Mail: any;
  const _default: any;
  export default _default;
}

declare module "framer-motion" {
  export const motion: any;
}

declare module "next-themes" {
  export const ThemeProvider: any;
  export function useTheme(): {
    resolvedTheme: "light" | "dark" | undefined;
    setTheme: (theme: "light" | "dark" | "system") => void;
    theme?: string;
    systemTheme?: string;
  };
}
