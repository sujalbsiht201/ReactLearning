import { DateOfBirth } from "./DateOfBirth";

export const Information = () => {
  return (
    <div className="flex justify-center">
      <div className="m-8 shadow-lg">
        <h2 className="font-bold px-40 text-xl">Create a new account</h2>
        <p className="px-44 py-2">It's quick and easy.</p>
        <span className="m-6">
          <input className="border px-4 py-2" text-stone-200 placeholder="First Name" />
        </span>
        <span className="m-6">
          <input className="border px-4 py-2" text-stone-200 placeholder="Surname" />
        </span>
        <DateOfBirth/>
      </div>
    </div>
  );
};
