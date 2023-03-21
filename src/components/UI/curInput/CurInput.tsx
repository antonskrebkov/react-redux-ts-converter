export default function CurInput(props: any) {
  return (
    <div className="relative mt-1 rounded-md shadow-sm">
      <input
        {...props}
        className="block w-full rounded-sm border-gray-300 pl-2 pr-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg text-gray-700"
        placeholder="0.00"
      />
    </div>
  )
}
