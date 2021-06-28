export default function Profile() {
  return (
    <div className="flex items-center flex-col justify-center p-5">
      <div className="flex items-center object-center bg-primary rounded shadow-lg p-3 dark:bg-darkpurple">
        <div className="flex justify-center items-center"></div>
        <br />

        <div className="flex items-center w-auto m-4">
          <p className="bg-gray-200 w-auto text-center p-10">User Name </p>
        </div>
      </div>
    </div>
  );
}
