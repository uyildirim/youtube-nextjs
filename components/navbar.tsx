export default function Navbar() {
  return (
    <div id="navbar" className=" flex w-full items-center justify-between p-5">
      <div id="logo" className="flex items-center gap-2 font-bold">
        <img src="/img/logo.svg" alt="" />
        <span>Admin Dashboard</span>
      </div>
      <div id="icons" className="flex gap-5 ">
        <img src="/img/search.svg" alt="" />
        <img src="/img/app.svg" alt="" />
        <img src="/img/expand.svg" alt=" " />
        <div id="notification" className="relative self-center">
          <img src="/img/notifications.svg" alt="" />
          <span className="absolute -right-3 -top-3 h-4 w-4 rounded-full bg-red-700 text-center text-xs">
            1
          </span>
        </div>
        <div id="user" className="flex ">
          <img
            className="h-7 w-7 rounded-full object-cover"
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          />
        </div>
        <img src="/img/settings.svg" alt="" />
      </div>
    </div>
  );
}
