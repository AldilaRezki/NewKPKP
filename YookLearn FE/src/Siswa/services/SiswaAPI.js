// const BASE_URL = "http://localhost:8000/api/student";

const BASE_URL = import.meta.env.VITE_SISWA_API;
const BASE_URL_GURU = import.meta.env.VITE_GURU_API;

export async function fetchCurrentMapel(idMapel) {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${BASE_URL}/mapel/${idMapel}`, {
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

export async function fetchStudentAssignment() {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${BASE_URL}/tugas`, {
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

export async function fetchSiswaProfile() {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${BASE_URL}/profile`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }
        return data.student;
    } catch (error) {
        console.error(error);
    }
}

export async function resetPassword(newPassword, oldPassword) {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${BASE_URL}/editpassword`, {
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

export async function fetchAllTugasMapel(idMapel) {
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

export async function fetchKelasMapel(idKelas) {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${BASE_URL}/kelas/${idKelas}`, {
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

export async function fecthKelas() {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${BASE_URL}/kelas`, {
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

export async function fetchSiswa(idMapel) {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${BASE_URL_GURU}/anggota/${idMapel}`, {
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

export async function fetchCurrentUjian(idMapel, idUjian) {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(
            `${BASE_URL}/matpel/${idMapel}/ujian/${idUjian}/detail`,
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

export async function fetchSoal(idUjian) {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${BASE_URL}/ujian/${idUjian}/soal`, {
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

export async function submitUjian(idUjian, listJawaban) {
    try {
        const token = localStorage.getItem("token");

        const formData = new FormData();
        formData.append("user_answers", JSON.stringify(listJawaban));

        const response = await fetch(`${BASE_URL}/ujian/${idUjian}/submit`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        });

        const data = await response.json();

        console.log(JSON.stringify(data));
        // return console.log(data);

        if (!response.ok) {
            throw new Error(data.message);
        }
        return data;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export async function fetchCurrentTugas(idTugas) {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${BASE_URL}/tugas/${idTugas}`, {
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

export async function fetchCurentMapelMateri(idMapel) {
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

export async function fetchCurrentUpload(idTugas) {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${BASE_URL}/tugas/${idTugas}/upload`, {
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

export async function fetchWaktuUjian(idUjian) {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${BASE_URL}/ujian/${idUjian}/waktu`, {
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

export async function fetchCurrentMateri(idMateri) {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${BASE_URL}/materi/${idMateri}`, {
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

export async function logOut() {
    try {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export async function uploadFile(file, idTugas) {
    try {
        const token = localStorage.getItem("token");

        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch(`${BASE_URL}/tugas/${idTugas}/add`, {
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

export async function fetchLogbook() {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${BASE_URL}/logbook`, {
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

export async function downloadLampiran(id) {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${BASE_URL}/logbook/lampiran/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await response.blob();
        const url = window.URL.createObjectURL(data);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "lampiran"); // Set nama file yang diunduh
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

        if (!response.ok) {
            throw new Error(data.message);
        }

        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function storeLogbook(formData) {
    try {
        const token = localStorage.getItem("token");

        const response = await fetch(`${BASE_URL}/logbook`, {
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
