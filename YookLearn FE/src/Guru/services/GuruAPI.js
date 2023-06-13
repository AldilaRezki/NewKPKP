// const BASE_URL = "http://localhost:8000/api/lecture";
const BASE_URL = import.meta.env.VITE_GURU_API;

export async function fetchProfile() {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function resetPassword(newPassword, oldPassword) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/profile/editpassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        new_password: newPassword,
        old_password: oldPassword,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function fetchMapel() {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/matpel`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchCurrentMapel(idMapel) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `http://localhost:8000/api/student/mapel/${idMapel}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchAllMateri(idMapel) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/matpel/${idMapel}/materi`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchCurrentMateri(idMapel, idMateri) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `${BASE_URL}/matpel/${idMapel}/materi/${idMateri}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchTugas(idMapel) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/matpel/${idMapel}/tugas`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchUjian(idMapel) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/matpel/${idMapel}/ujian`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchSoalUjian(idMapel, idUjian) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `${BASE_URL}/matpel/${idMapel}/ujian/${idUjian}/soal`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchCurrentTugas(idMapel, idTugas) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `${BASE_URL}/matpel/${idMapel}/tugas/${idTugas}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchStudentSubmit(idMapel, idTugas) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `${BASE_URL}/matpel/${idMapel}/tugas/${idTugas}/kumpul`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchIndividualSubmit(idMapel, idSubmit, idTugas) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `${BASE_URL}/matpel/${idMapel}/tugas/${idTugas}/submit/${idSubmit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchStudent(idMapel) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/anggota/${idMapel}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchUjianSubmit(idMapel, idUjian) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `${BASE_URL}/mapel/${idMapel}/ujian/${idUjian}/kumpul`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchUjianDetail(idUjian) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/ujian/${idUjian}/infoUjian`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchHasilUjianKelas(idMapel, idUjian) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `${BASE_URL}/mapel/${idMapel}/ujian/${idUjian}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchHasilPerseta(idUjian, idSiswa) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `${BASE_URL}/ujian/${idUjian}/hasil/${idSiswa}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchPoinSiswa(idUjian, idSiswa) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `${BASE_URL}/ujian/${idUjian}/poin/${idSiswa}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function addMateri(idMapel, judul, file) {
  try {
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("judul_materi", judul);
    formData.append("file", file);

    const response = await fetch(`${BASE_URL}/matpel/${idMapel}/materi/add`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function addUjian(
  idMapel,
  judul,
  isiUjian,
  waktu,
  file,
  deadline
) {
  try {
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("judul_ujian", judul);
    formData.append("file", file);
    formData.append("deskripsi", isiUjian);
    formData.append("waktu", waktu);
    formData.append("deadline", deadline);

    const response = await fetch(`${BASE_URL}/matpel/${idMapel}/ujian/add`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function addSoal(idUjian, listSoal) {
  try {
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("list_soal", JSON.stringify(listSoal));

    const response = await fetch(`${BASE_URL}/ujian/${idUjian}/tambahSoal`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function addTugas(
  idMapel,
  judul,
  file,
  combinedDeadline,
  nilai,
  tipeDeadline
) {
  try {
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("judul_tugas", judul);
    formData.append("file", file);
    formData.append("deadline", combinedDeadline);
    formData.append("nilai", nilai);
    formData.append("tipe_deadline", tipeDeadline);

    const response = await fetch(`${BASE_URL}/matpel/${idMapel}/tugas/add`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function updateTugas(
  idMapel,
  idTugas,
  judul,
  file,
  combinedDeadline,
  nilai,
  tipeDeadline
) {
  try {
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("judul_tugas", judul);
    formData.append("file", file);
    formData.append("deadline", combinedDeadline);
    formData.append("nilai", nilai);
    formData.append("tipe_deadline", tipeDeadline);

    const response = await fetch(
      `${BASE_URL}/matpel/${idMapel}/tugas/${idTugas}/edit`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function submitNilai(idMapel, idSubmit, nilai) {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(
      `${BASE_URL}/matpel/${idMapel}/kumpul/${idSubmit}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          nilai: nilai,
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      return true;
    } else {
      throw new Error("Terjadi kesalahan saat mengirimkan nilai");
    }
  } catch (error) {
    console.error(error);
  }
}

export async function submitNilaiUjian(idUjian, idSiswa, nilai) {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(
      `${BASE_URL}/ujian/${idUjian}/submit/${idSiswa}/update`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          nilai: nilai,
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      return true;
    } else {
      throw new Error("Terjadi kesalahan saat mengirimkan nilai");
    }
  } catch (error) {
    console.error(error);
  }
}

export async function removeTugas(idMapel, idTugas) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `${BASE_URL}/matpel/${idMapel}/tugas/${idTugas}/delete`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
    return true;
  } catch (error) {
    console.error(error);
  }
}
