/** @type {import('tailwindcss').Config} */
const fs = require('fs');
const yaml = require('js-yaml');

// Load design tokens
const tokens = yaml.safeLoad(fs.readFileSync('./design-tokens.yaml', 'utf8'));

const { foundation, typography, themes } = tokens;

// Helper to convert px to rem
const pxToRem = (px) => `${px / 16}rem`;

// Generate spacing scale
const spacing = {};
foundation.spacing.scale.forEach((step) => {
  spacing[step] = pxToRem(step * foundation.spacing.base);
});

// Generate radius
const borderRadius = {};
Object.entries(foundation.radius).forEach(([key, value]) => {
  borderRadius[key] = pxToRem(value);
});

// Generate font sizes
const fontSize = {};
Object.entries(typography.sizes).forEach(([key, value]) => {
  const lineHeight = typography.lineHeights.normal;
  fontSize[key] = [pxToRem(value), { lineHeight }];
});

// Generate theme configs
function generateThemeConfig(themeKey, theme) {
  const { color, radius, shadows, components, fonts } = theme;
  const semantic = color.semantic;
  const primitive = color.primitive;

  // Flatten primitive colors for Tailwind
  const colors = {};
  Object.entries(primitive).forEach(([scaleName, scale]) => {
    colors[scaleName] = scale;
  });

  // Add semantic colors
  colors.primary = {
    50: semantic.primaryLight,
    100: semantic.primaryLight,
    200: semantic.primaryLight,
    300: semantic.primaryLight,
    400: semantic.primary,
    500: semantic.primary,
    600: semantic.primaryHover,
    700: semantic.primaryDark,
    800: semantic.primaryDark,
    900: semantic.primaryDark,
    DEFAULT: semantic.primary,
    foreground: semantic.textInverse,
  };

  colors.secondary = {
    50: semantic.secondaryLight,
    100: semantic.secondaryLight,
    200: semantic.secondaryLight,
    300: semantic.secondaryLight,
    400: semantic.secondary,
    500: semantic.secondary,
    600: semantic.secondaryHover,
    700: semantic.secondaryHover,
    800: semantic.secondaryHover,
    900: semantic.secondaryHover,
    DEFAULT: semantic.secondary,
    foreground: semantic.textInverse,
  };

  colors.accent = {
    50: semantic.accent,
    100: semantic.accent,
    200: semantic.accent,
    300: semantic.accent,
    400: semantic.accent,
    500: semantic.accent,
    600: semantic.accentHover,
    700: semantic.accentHover,
    800: semantic.accentHover,
    900: semantic.accentHover,
    DEFAULT: semantic.accent,
    foreground: semantic.textInverse,
  };

  colors.success = semantic.success;
  colors.warning = semantic.warning;
  colors.error = semantic.error;
  colors.info = semantic.info;

  colors.background = semantic.background;
  colors.surface = semantic.surface;
  colors.surfaceRaised = semantic.surfaceRaised;

  colors.border = semantic.border;
  colors.borderStrong = semantic.borderStrong;

  colors.text = {
    primary: semantic.textPrimary,
    secondary: semantic.textSecondary,
    muted: semantic.textMuted,
    inverse: semantic.textInverse,
    link: semantic.textLink,
  };

  colors.overlay = semantic.overlay;

  // Theme-specific radius
  const themeRadius = {};
  Object.entries(radius).forEach(([key, value]) => {
    themeRadius[key] = pxToRem(value);
  });

  // Theme-specific shadows
  const themeShadows = {};
  Object.entries(shadows).forEach(([key, value]) => {
    themeShadows[key] = value;
  });

  // Font families
  const fontFamily = {
    heading: [fonts.heading],
    body: [fonts.body],
    mono: [fonts.mono],
    sans: [fonts.body],
    serif: [fonts.heading],
  };

  return {
    colors,
    borderRadius: themeRadius,
    boxShadow: themeShadows,
    fontFamily,
    // Component defaults
    ...generateComponentDefaults(themeKey, theme),
  };
}

function generateComponentDefaults(themeKey, theme) {
  const { components, radius } = theme;
  const defaults = {};

  // Button defaults
  if (components.button) {
    defaults.button = {};
    Object.entries(components.button).forEach(([variant, props]) => {
      defaults.button[variant] = {
        padding: props.padding,
        fontWeight: props.fontWeight,
        letterSpacing: props.letterSpacing,
        textTransform: props.textTransform || 'none',
        borderWidth: props.borderWidth || '0',
        borderRadius: pxToRem(radius.md),
        height: pxToRem(foundation.spacing.base * 11), // 44px default
        minWidth: pxToRem(88),
        transition: `all ${foundation.transitions.fast}`,
      };
    });
  }

  // Card defaults
  if (components.card) {
    defaults.card = {
      padding: pxToRem(components.card.padding),
      borderWidth: pxToRem(components.card.borderWidth),
      borderRadius: pxToRem(radius.lg),
      boxShadow: shadows.md,
      transition: `all ${foundation.transitions.normal}`,
    };
  }

  // Input defaults
  defaults.input = {
    height: pxToRem(44),
    padding: pxToRem(12) + ' ' + pxToRem(16),
    borderWidth: pxToRem(1),
    borderRadius: pxToRem(radius.md),
    fontSize: pxToRem(typography.sizes.base),
    lineHeight: typography.lineHeights.normal,
    transition: `all ${foundation.transitions.fast}`,
  };

  return defaults;
}

// Generate all theme configs
const themeConfigs = {};
Object.keys(themes).forEach((key) => {
  themeConfigs[key] = generateThemeConfig(key, themes[key]);
});

module.exports = {
  content: [
    './*.html',
    './**/*.html',
    './**/*.js',
    './**/*.jsx',
    './**/*.ts',
    './**/*.tsx',
    './**/*.vue',
    './**/*.svelte',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Foundation (shared)
      spacing,
      borderRadius,
      fontSize,
      fontWeight: typography.fontWeights,
      lineHeight: typography.lineHeights,
      letterSpacing: typography.letterSpacing,
      transitionDuration: {
        fast: foundation.transitions.fast.replace('ms', ''),
        normal: foundation.transitions.normal.replace('ms', ''),
        slow: foundation.transitions.slow.replace('ms', ''),
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'ease-in': 'cubic-bezier(0.55, 0, 1, 0.45)',
        'ease-in-out': 'cubic-bezier(0.65, 0, 0.35, 1)',
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      screens: {
        sm: `${foundation.breakpoints.sm}px`,
        md: `${foundation.breakpoints.md}px`,
        lg: `${foundation.breakpoints.lg}px`,
        xl: `${foundation.breakpoints.xl}px`,
        '2xl': `${foundation.breakpoints['2xl']}px`,
      },
      container: {
        center: true,
        padding: {
          DEFAULT: pxToRem(foundation.container.padding.mobile),
          sm: pxToRem(foundation.container.padding.mobile),
          md: pxToRem(foundation.container.padding.tablet),
          lg: pxToRem(foundation.container.padding.desktop),
          xl: pxToRem(foundation.container.padding.desktop),
          '2xl': pxToRem(foundation.container.padding.desktop),
        },
        screens: {
          sm: `${foundation.breakpoints.sm}px`,
          md: `${foundation.breakpoints.md}px`,
          lg: `${foundation.breakpoints.lg}px`,
          xl: `${foundation.breakpoints.xl}px`,
          '2xl': `${foundation.container.maxWidth}px`,
        },
      },
      // Theme-specific extensions (applied via data-theme attribute)
      // Each theme gets its own config under a data-theme selector
      // We'll use CSS variables for theme switching in practice
    },
  },
  // Multi-theme plugin approach
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    // Custom plugin for theme variants
    function({ addVariant, e, prefix }) {
      Object.keys(themes).forEach((themeKey) => {
        addVariant(`theme-${themeKey}`, `[data-theme="${themeKey}"] &`);
        addVariant(`theme-${themeKey}-dark`, `[data-theme="${themeKey}"].dark &, [data-theme="${themeKey}"] .dark &`);
      });
    },
  ],
  // Export theme configs for programmatic use
  themeConfigs,
};