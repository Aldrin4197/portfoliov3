import avatar from "../assets/me.png"; // Change path if necessary

function Getintouch() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 pt-8">
      {/* Heading at the Top */}
      <h2 className="text-4xl font-bold text-primary text-center mb-3">
        Get in touch.
      </h2>

      <div className="flex items-center gap-6">
        {/* Avatar Section */}
        <div className="avatar">
          <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={avatar} alt="Aldrin's Avatar" />
          </div>
        </div>

        {/* Text Section */}
        <div className="text-left">
          <p className="text-md text-base-content">
            Want to chat? Just shoot me a DM with a direct question on Twitter
            and I'll respond as soon as I can.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Getintouch;
