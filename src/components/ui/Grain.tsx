export function Grain() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-[0.07]">
      <div className="absolute inset-[-200%] h-[400%] w-[400%] animate-grain bg-[url('/noise.svg')] bg-[length:256px_256px]" />
    </div>
  )
}
