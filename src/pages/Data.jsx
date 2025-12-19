


const Data = ({onBack}) => {
  
  const user = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div className="flex justify-center w-full overflow-y-auto">
      <div className="flex justify-center  flex-col w-1/2 gap-5 ">
        <button
         onClick={onBack}
          className="self-end bg-red-600 py-2 px-4 text-white font-semibold rounded active:scale-105"
        >
          Back
        </button>

        <div className="bg-amber-100 flex gap-5 flex-col w-full p-10 rounded-lg">
          <h1 className="text-4xl font-extrabold text-center text-blue-900">
            Profile Details of, {user.name}
          </h1>

          <p className="text-lg font-semibold bg-white px-2 flex gap-5">
            Employee ID:
            <span className="text-gray-900 font-normal">{user.employee_id}</span>
          </p>

          <p className="text-lg font-semibold bg-white px-2 flex gap-5">
            Name:
            <span className="text-gray-900 font-normal">{user.name}</span>
          </p>

          <p className="text-lg font-semibold bg-white px-2 flex gap-5">
            Alias:
            <span className="text-gray-900 font-normal">{user.alias}</span>
          </p>

          <p className="text-lg font-semibold bg-white px-2 flex gap-5">
            Title:
            <span className="text-gray-900 font-normal">{user.title}</span>
          </p>

          <p className="text-lg font-semibold bg-white px-2 flex gap-5">
            User Type:
            <span className="text-gray-900 font-normal">{user.userType}</span>
          </p>

          <p className="text-lg font-semibold bg-white px-2 flex gap-5">
            Email:
            <span className="text-gray-900 font-normal">{user.vEmail}</span>
          </p>

          <p className="text-lg font-semibold bg-white px-2 flex gap-5">
            Mobile No:
            <span className="text-gray-900 font-normal">{user.vMobile}</span>
          </p>

          <p className="text-lg font-semibold bg-white px-2 flex gap-5">
            Address:
            <span className="text-gray-900 font-normal">{user.vaddress}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Data;
