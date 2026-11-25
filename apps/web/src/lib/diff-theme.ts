/**
 * Syntax themes for the diff and file views (`@pierre/diffs`). Dark uses the theme the
 * transcript's code blocks use, whose dimmest tokens (comments) stay above 4.5:1 on the dimmed
 * slate surfaces; `index.css` paints the view on `--surface` instead of the theme's own
 * near-black background (#661). Light is unchanged.
 */
export const DIFF_THEMES = { dark: "github-dark-default", light: "pierre-light" } as const;
