export function ComponentLoader({ name }: { name: string }) {
  return (
    <div className="w-full py-12 flex items-center justify-center">
      <div className="border-4 border-primary bg-card p-6 space-y-4 box-glow max-w-md w-full mx-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border-2 border-primary bg-primary/20 flex items-center justify-center box-glow animate-pulse">
            <div className="text-xl font-bold text-primary terminal-glow">⌛</div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-primary terminal-glow uppercase tracking-wider">
              CARGANDO {name}...
            </h3>
            <p className="text-xs text-muted-foreground mt-1">&gt; ESPERE POR FAVOR_</p>
          </div>
        </div>

        {/* Animated progress bar */}
        <div className="border-2 border-primary bg-background p-1">
          <div className="h-4 bg-primary relative overflow-hidden animate-loading-bar">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-gradient"></div>
          </div>
        </div>

        {/* Loading dots */}
        <div className="flex gap-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-2 h-2 border border-primary bg-primary/50 box-glow"
              style={{
                animation: `pulse 1.5s ease-in-out infinite`,
                animationDelay: `${i * 0.15}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}
