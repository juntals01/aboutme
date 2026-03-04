import design from '../../design.json';

export { design };

export const designVars = {
  '--bg': design.theme.colors.background,
  '--card': design.theme.colors.card,
  '--border': design.theme.colors.border,
  '--primary': design.theme.colors.primary,
  '--primarySoft': design.theme.colors.primarySoft,
  '--text': design.theme.colors.textPrimary,
  '--textSecondary': design.theme.colors.textSecondary,
  '--textMuted': design.theme.colors.textMuted,
  '--success': design.theme.colors.success,
  '--warning': design.theme.colors.warning,
  '--danger': design.theme.colors.danger,
  '--shadowCard': design.shadow.card,
  '--glowPrimary': design.shadow.glowPrimary,
  '--radiusCard': design.radius.card,
  '--radiusButton': design.radius.button,
  '--radiusBadge': design.radius.badge,
  '--gap': design.layout.grid.gap,
  '--container': design.layout.containerWidth,
  '--sectionSpacing': design.layout.sectionSpacing,
  '--cardPadding': design.card.padding,
} as const;
