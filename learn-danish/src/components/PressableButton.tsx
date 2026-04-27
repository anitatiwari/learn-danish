type PressableButtonProps = {
    children: React.ReactNode
    onClick?: () => void
    variant?: 'green' | 'blue' | 'white' | 'red'
  }
  
  export function PressableButton({
    children,
    onClick,
    variant = 'green',
  }: PressableButtonProps) {
    const styles = {
      green: 'bg-[#58CC02] shadow-[0_6px_0_#2B7A0B] text-white',
      blue: 'bg-[#1CB0F6] shadow-[0_6px_0_#0B76A8] text-white',
      white: 'bg-white shadow-[0_6px_0_#D7E4EF] text-slate-800',
      red: 'bg-[#FF4B4B] shadow-[0_6px_0_#B91C1C] text-white',
    }
  
    return (
      <button
        onClick={onClick}
        className={`rounded-2xl px-5 py-4 font-black transition active:translate-y-[6px] active:shadow-none ${styles[variant]}`}
      >
        {children}
      </button>
    )
  }