interface IButtonProps {
  color: 'string',
  className: 'string',
  children: React.ReactNode,
  onClick?: () => void 
}

export default function Button({ color, className, children, onClick }: IButtonProps) {
  
  return(
    <button >

    </button>
  )
}