export default function Button({ text, variant, onClick }) {
  const variants = {
    'no-fill': 'hover:text-white active:text-[#cc5902]',
    fill: 'bg-[#ff7000] rounded-sm hover:bg-[#cc5902] text-white',
  };
  return (
    <div
      className={`px-2 py-1 cursor-pointer ${variants[variant]}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
}
