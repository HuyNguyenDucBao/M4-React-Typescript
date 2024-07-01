import React, { FormEvent, useMemo, useState } from "react";
import "./index.css";
import { data as initialData } from "./data";

interface User {
  id: number | null;
  name: string;
  dob: string;
  email: string;
  address: string;
  status: boolean;
  block: boolean;
}

const BT = () => {
  const [data, setData] = useState<User[]>(initialData);
  const [user, setUser] = useState<User>({
    id: null,
    name: "",
    dob: "",
    email: "",
    address: "",
    status: false,
    block: true,
  });

  const [showForm, setShowForm] = useState(true);
  const [showBlock, setShowBlock] = useState(true);
  const [showDelete, setShowDelete] = useState(true);
  const [isEditing, setIsEditing] = useState(true);
  const [userToBlock, setUserToBlock] = useState<number | null>(null);
  const [userToDelete, setUserToDelete] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // phaan trang
  const [size, setSize] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = useMemo(() => {
    return data.filter(
      (user) =>
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [data, searchQuery]);
  const totalPages = useMemo(() => {
    return Math.ceil(filteredData.length / size);
  }, [searchQuery, size]);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * size;
    const end = start + size;
    return filteredData.slice(start, end);
  }, [searchQuery, currentPage, size]);
  ///////////////

  const handleAddNewEmployee = () => {
    setIsEditing(false);
    setUser({
      id: null,
      name: "",
      dob: "",
      email: "",
      address: "",
      status: false,
      block: true,
    });
    setShowForm(!showForm);
  };

  const handleForm = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      setData(data.map((item) => (item.id === user.id ? { ...user } : item)));
    } else {
      setData([...data, { ...user, id: data.length + 1 }]);
    }
    setUser({
      id: null,
      name: "",
      dob: "",
      email: "",
      address: "",
      status: false,
      block: true,
    });
    setShowForm(true);
  };

  const handleEdit = (id: number | null) => {
    const selectedUser = data.find((user) => user.id === id);
    if (selectedUser) {
      setUser(selectedUser);
      setIsEditing(true);
      setShowForm(false);
    }
  };

  const ShowBlock = () => {
    setShowBlock(!showBlock);
  };

  const ShowDelete = () => {
    setShowDelete(!showDelete);
  };

  const toggleBlock = (id: number | null) => {
    setUserToBlock(id);
    setShowBlock(!showBlock);
  };

  const confirmBlock = () => {
    setData(
      data.map((user) =>
        user.id === userToBlock ? { ...user, block: !user.block } : user
      )
    );
    setShowBlock(!showBlock);
  };

  const toggleDelete = (id: number | null) => {
    setUserToDelete(id);
    setShowDelete(!showDelete);
  };

  const deleteUser = () => {
    setData(data.filter((user) => user.id !== userToDelete));
    setShowDelete(true);
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset về trang đầu tiên khi tìm kiếm
  };

  // Filter the data based on the search query

  const rf = () => {
    setSearchQuery("");
    setCurrentPage(1);
  };

  return (
    <div>
      <div>
        <div className="w-[80%] m-auto mt-4 h-[100vh]">
          <main className="main">
            <header className="d-flex justify-content-between mb-3">
              <h3 className="">Nhân viên</h3>
              <button
                className="btn btn-primary"
                onClick={handleAddNewEmployee}
              >
                Thêm mới nhân viên
              </button>
            </header>
            <div className="d-flex align-items-center justify-content-end gap-2 mb-3">
              <input
                style={{ width: 350 }}
                type="text"
                className="form-control"
                placeholder="Tìm kiếm theo email hoặc tên"
                value={searchQuery}
                onChange={handleSearch}
              />
              <i
                className="fa-solid fa-arrows-rotate"
                title="Refresh"
                onClick={rf}
              />
            </div>
            {/* Danh sách nhân viên */}
            <table className="table table-bordered table-hover table-striped">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Họ và tên</th>
                  <th>Ngày sinh</th>
                  <th>Email</th>
                  <th>Địa chỉ</th>
                  <th>Trạng thái</th>
                  <th colSpan={3}>Chức năng</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.dob}</td>
                    <td>{user.email}</td>
                    <td>{user.address}</td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        <div
                          className="status"
                          style={{
                            backgroundColor: user.status ? "red" : "pink",
                          }}
                        />
                        <span>{user.status ? "HD" : "NHD"}</span>
                      </div>
                    </td>
                    <td>
                      <span
                        className="button button-block"
                        onClick={() => toggleBlock(user.id)}
                      >
                        {user.block ? "Chan" : "Ko Chan"}
                      </span>
                    </td>
                    <td>
                      <span
                        className="button button-edit"
                        onClick={() => handleEdit(user.id)}
                      >
                        Sửa
                      </span>
                    </td>
                    <td>
                      <span
                        className="button button-delete"
                        onClick={() => toggleDelete(user.id)}
                      >
                        Xóa
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <footer className="d-flex justify-content-end align-items-center gap-3">
              <select
                className="form-select"
                value={size}
                onChange={(e) => setSize(+e.target.value)}
              >
                <option value={1}>Hiển thị 1 bản ghi trên trang</option>
                <option value={2}>Hiển thị 2 bản ghi trên trang</option>
                <option value={3}>Hiển thị 3 bản ghi trên trang</option>
                <option value={4}>Hiển thị 4 bản ghi trên trang</option>
              </select>
              <ul className="pagination">
                <li className="page-item">
                  <a
                    className={`page-link ${
                      currentPage == 1 ? "disabled" : ""
                    }`}
                    href="#"
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    Previous
                  </a>
                </li>

                {Array.from(new Array(totalPages), (_, index) => index + 1).map(
                  (page, index) => (
                    <li
                      className={`page-item ${
                        currentPage == page ? "active" : ""
                      }`}
                    >
                      <a
                        className="page-link"
                        href="#"
                        onClick={() => setCurrentPage(page)}
                      >
                        {index + 1}
                      </a>
                    </li>
                  )
                )}
                <li className="page-item">
                  <a
                    className={`page-link ${
                      currentPage == totalPages ? "disabled" : ""
                    }`}
                    href="#"
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    Next
                  </a>
                </li>
              </ul>
            </footer>
          </main>
        </div>
        {/* Form thêm mới nhân viên */}

        <div className="overlay" hidden={showForm}>
          <form className="form" onSubmit={submitForm}>
            <div className="d-flex justify-content-between align-items-center">
              <h4>
                {isEditing ? "Chỉnh sửa nhân viên" : "Thêm mới nhân viên"}
              </h4>
              <i className="fa-solid fa-xmark" onClick={handleAddNewEmployee} />
            </div>
            <div>
              <label className="form-label" htmlFor="userName">
                Họ và tên
              </label>
              <input
                id="userName"
                type="text"
                className="form-control "
                onChange={handleForm}
                name="name"
                value={user.name}
              />
            </div>
            <div>
              <label className="form-label" htmlFor="dateOfBirth">
                Ngày sinh
              </label>
              <input
                id="dateOfBirth"
                type="date"
                className="form-control "
                onChange={handleForm}
                name="dob"
                value={user.dob}
              />
            </div>
            <div>
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="form-control email"
                onChange={handleForm}
                name="email"
                value={user.email}
              />
            </div>
            <div>
              <label className="form-label " htmlFor="address">
                Địa chỉ
              </label>
              <textarea
                className="form-control "
                name="address"
                id="address"
                rows={3}
                onChange={handleForm}
                value={user.address}
              />
            </div>
            <div>
              <button className="w-100 btn btn-primary">
                {isEditing ? "Cập nhật" : "Thêm mới"}
              </button>
            </div>
          </form>
        </div>

        {/* Modal xác nhận chặn tài khoản */}
        <div className="overlay" hidden={showBlock}>
          <div className="modal-custom">
            <div className="modal-title">
              <h4>Cảnh báo</h4>
              <i className="fa-solid fa-xmark" onClick={ShowBlock} />
            </div>
            <div className="modal-body-custom">
              <span>Bạn có chắc chắn muốn chặn tài khoản này?</span>
            </div>
            <div className="modal-footer-custom">
              <button className="btn btn-light" onClick={ShowBlock}>
                Hủy
              </button>
              <button className="btn btn-danger" onClick={confirmBlock}>
                Xác nhận
              </button>
            </div>
          </div>
        </div>
        {/* Modal xác nhận xóa tài khoản */}
        <div className="overlay" hidden={showDelete}>
          <div className="modal-custom">
            <div className="modal-title">
              <h4>Cảnh báo</h4>
              <i className="fa-solid fa-xmark" onClick={ShowDelete} />
            </div>
            <div className="modal-body-custom">
              <span>Bạn có chắc chắn muốn xóa tài khoản này?</span>
            </div>
            <div className="modal-footer-custom">
              <button className="btn btn-light" onClick={ShowDelete}>
                Hủy
              </button>
              <button className="btn btn-danger" onClick={deleteUser}>
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BT;
