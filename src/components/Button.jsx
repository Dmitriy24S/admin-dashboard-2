import { useTopbarContext } from '../context/ContextProvider'

const Button = ({
  icon,
  bgColor,
  color,
  bgHoverColor,
  size,
  text,
  borderRadius,
  width,
  itemName,
}) => {
  const { toggleState } = useTopbarContext()

  return (
    <button
      type='button'
      onClick={() => toggleState(itemName)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      // className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-light-gray dark:hover:bg-main-dark-bg`}
    >
      {icon} {text}
    </button>
  )
}

export default Button
