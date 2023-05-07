function HeaderKelas() {
  return (
    <div className="flex justify-between py-4 px-10 bg-tosca">
      <h1 className="text-lg font-semibold text-biru">Kelas X IPA 1</h1>
      <ul className="flex justify-between w-6/12">
        <a href="/xipa1">Home</a>
        <a href="/xipa1/forum">Forum</a>
        <a>Materi</a>
        <a href="/xipa1/daftar-tugas">Tugas</a>
        <a href="/xipa1/ujian">Ujian</a>
        <a href="/xipa1/daftar-anggota-kelas">Anggota</a>
      </ul>
    </div>
  );
}

export default HeaderKelas;
