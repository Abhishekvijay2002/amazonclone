
function Header() {
  return (
    <div>
        <div className="bg-[#001f3c] text-white text-[11px] py-3">
  <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-2">
    <div className="flex items-center">
<img src="./Amazonlogo.png" alt="Amazon Business" className="w-40 h-auto" />
</div>

    <div className="flex items-center gap-6 tracking-wide text-base">
      <div className="flex items-center gap-2">
        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white text-[#022241] text-[10px] font-bold">
          1
        </span>
        <span className="font-semibold">ACCOUNT CREATION</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="flex items-center justify-center w-5 h-5 rounded-full border border-white text-[10px] font-bold">
          2
        </span>
        <span className="font-semibold">BUSINESS DETAILS</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="flex items-center justify-center w-5 h-5 rounded-full border border-white text-[10px] font-bold">
          3
        </span>
        <span className="font-semibold">FINISH</span>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Header