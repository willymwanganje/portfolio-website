const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "https://portfolio-website-qb34.onrender.com/api/contact",
      form
    );

    console.log("SUCCESS RESPONSE:", res.data);

    alert(res.data.message || "Message sent!");

    setForm({
      name: "",
      email: "",
      message: ""
    });

  } catch (error) {
    console.log("ERROR FULL:", error);

    alert(
      error.response?.data?.error ||
      "Failed to send message"
    );
  }
};