export default function GoldButton({ children, onClick, href, className = '', variant = 'primary' }) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm tracking-wide transition-all duration-300 cursor-pointer';

  const variants = {
    primary: 'bg-gradient-to-r from-gold-dark via-gold to-gold-light text-charcoal hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:scale-[1.02] active:scale-[0.98]',
    outline: 'border border-gold/30 text-gold hover:bg-gold/10 hover:border-gold/50 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] active:scale-[0.98]',
    ghost: 'text-gold/70 hover:text-gold hover:bg-gold/5 active:scale-[0.98]',
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
