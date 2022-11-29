const testimonials = [
    {
      name: "Jorge ",
      photoUrl:
        "https://images.unsplash.com/photo-1535931737580-a99567967ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      text: "Tiene todo lo que necesito! conocer esta app ha sido un gran cambio en mi vida.",
    },
    {
      name: "Ana",
      photoUrl:
        "https://images.unsplash.com/photo-1564164841584-391b5c7b590c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=623&q=80",
      text: "Muchas gracias!! que genial esto!",
    },
    {
      name: "Jose",
      photoUrl:
        "https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      text: "Me han solucionado un gran problema.",
    },
  ];
  
  const imgEl = document.querySelector("img");
  const textEl = document.querySelector(".text");
  const usernameEl = document.querySelector(".username");
  
  let idx = 0;
  
  updateTestimonial();
  
  function updateTestimonial() {
    const { name, photoUrl, text } = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++;
    if (idx === testimonials.length) {
      idx = 0;
    }
    setTimeout(() => {
      updateTestimonial();
    }, 1900);
  }
  