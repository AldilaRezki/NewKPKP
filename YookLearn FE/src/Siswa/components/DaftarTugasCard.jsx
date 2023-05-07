function DaftarTugasCard(props) {
  const { pertemuan, tglUpload, kelas } = props;
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  let dropdownContent = null;

  if (kelas === "X") {
    dropdownContent = (
      <div className="ml-20 mt-2">
        <TugasCard pertemuan="Tugas 1" tglUpload="23 Januari" />
      </div>
    );
  } else if (kelas === "XI") {
    dropdownContent = (
      <div className="ml-20 mt-2">
        <TugasCard pertemuan="Tugas 1" tglUpload="23 Januari" />
        <TugasCard pertemuan="Tugas 2" tglUpload="24 Januari" />
      </div>
    );
  } else if (kelas === "XII") {
    dropdownContent = (
      <div className="ml-20 mt-2 mb-20">
        <TugasCard pertemuan="Tugas 1" tglUpload="23 Januari" />
      </div>
    );
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dropdownRef]);

  const dropdownRef = useRef();

  return (
    <div>
      <div
        className="flex flex-row items-center mt-[75px] ml-[103px]"
        onClick={toggleDropdown}
      >
        <IoMdPaper className="rounded-full bg-[#EEF4FA] text-[#1A1F5A] text-5xl p-2 align-middle"></IoMdPaper>
        <h1 className="font-bold text-[#1A1F5A] ml-10"> {pertemuan} </h1>
        <h1 className="text-slate-400 font-bold ml-60">{tglUpload}</h1>
      </div>

      {isDropdownOpen && <div ref={dropdownRef}>{dropdownContent}</div>}
    </div>
  );
}
