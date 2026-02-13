import React from 'react'
import img1 from "./Images/kpr.webp"
import img2 from "./Images/srkv.png"

const Education = () => {

  const studies = [
    {
      id: 1,
      college: "KPR Institute Of Engineering and Technology",
      duration: "2023 – 2026",
      img: img1,
      specialization: "BE - Computer Science Engineering",
      gpa: 8.35
    },
    {
      id: 2,
      college: "Sri Ramakrishna Mission Vidyalaya Polytechnic College",
      duration: "2020 - 2023",
      img: img2,
      specialization: "Diploma - Information Technology",
      percentage: 91.35
    },
  ]

  return (
    <section className="container py-5 text-center mt-5" id="education">
      <h2 className="Intern-heading mb-5 ">Education</h2>

      <div className="row">
        {studies.map((item) => (
          <div className="col-12 col-md-6 mb-4" key={item.id}>
            <div className="internship-item p-4 text-center w-100">

              <img
                src={item.img}
                alt={item.college}
                style={{
                  width: "250px",
                  height: "150px",
                  objectFit: "contain"
                }}
              />

              <p className="mb-1 intern-heading mt-3">{item.college}</p>
              <h5 className="mb-1 intern-subheading">
                {item.specialization}
              </h5>
              <p className="intern-subheading">{item.duration}</p>

              {/* Conditional Rendering */}
              {item.gpa && <p className='intern-subheading'>GPA: {item.gpa}</p>}
              {item.percentage && <p className='intern-subheading'>Percentage: {item.percentage}%</p>}

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
