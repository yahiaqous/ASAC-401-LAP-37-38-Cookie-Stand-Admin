export default function CreateForm(props) {
  return (
    <form
      className="flex-col w-3/4 p-2 mx-auto my-8 bg-gray-200"
      onSubmit={props.onCreate}
    >
      <fieldset>
        <h1 className="my-3 text-2xl text-center" type="text">
          Cookie Stand Admin
        </h1>
        <div className="flex">
          <label className="mx-1">Location</label>
          <input name="location" className="flex-auto" />
        </div>

        <div className="flex w-3/4 my-5">
          <div className="flex-col w-1/4">
            <label>Minimum Custumer per Hour</label>
            <input type="integer" className="" name="minCustomers" />
          </div>
          <div className="flex-col w-1/4">
            <label>Maximum Custumer per Hour</label>
            <input type="integer" className="" name="maxCustomers" />
          </div>
          <div className="flex-col w-1/4">
            <div className="flex"></div>
            <label>Average Cookies per Sales</label>
            <input type="integer" className="" name="avgCookies" />
          </div>

          <button className="px-20 py-5 bg-gray-500 text-gray-50">
            Create
          </button>
        </div>
      </fieldset>
    </form>
  );
}
