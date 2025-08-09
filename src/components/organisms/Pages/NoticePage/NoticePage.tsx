const NoticePage = () => {
  const handlePost = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
    };
    const date = new Date();
    const inputValue: { [key: string]: string } = {
      Email: target.email.value,
      "Created At": date.toLocaleString(),
    };
    console.log(inputValue);
    const APP_ID =
      "AKfycbx5auii34v2lN8FNR6jKHvBpb4d7rvXJedc9T9pOCTiTnoI9btDUzHE_zte6t2iD-aC";
    const baseURL = `https://script.google.com/macros/s/${APP_ID}/exec`;
    const formData = new FormData();
    Object.keys(inputValue).forEach((key) => {
      formData.append(key, inputValue[key]);
    });
    try {
      const res = await fetch(baseURL, {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        alert("Worked");

        console.log("Request was successful:", res);
      } else {
        alert("Failed");
        console.log("Request Failed:", res);
      }
    } catch (e) {
      alert("Failed");

      console.error("Error during fetch:", e);
    }
  };

  return (
    <div>
      <form onSubmit={handlePost}>
        <input type="text" name="email" />
        <button>submit</button>
      </form>
    </div>
  );
};

export default NoticePage;
