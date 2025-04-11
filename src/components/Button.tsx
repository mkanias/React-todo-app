const Button = ({ buttonType, children }) => {
  return (
    <button type="submit"
    className={`h-[45px] bg-[#473a2b] w-full text-white rounded-[5px] cursor-pointer hover:bg-[#322618] ${buttonType==='secondary' ? 'opacity-85' : ''}`}>
        {children}
    </button>
  )
}

export default Button