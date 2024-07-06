import React from "react";

export default function About(props) {
  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white'
  }

  return (

    <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
      <h1 className="my-3">About Us</h1>
      <div>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>Analyze Your Text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                This is the Best TextUtilssssss App..Textutils gives you a way to analyze your text quickly and efficiently . Be it word count ,character count  and Preview also...Analyzing your text allows for deeper insights and understanding. It's a process of unraveling layers of meaning, uncovering nuances, and discovering connections. Embrace the journey of analysis; it opens doors to knowledge and enhances comprehension......
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Free to Use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Textutils is a free character tool that provides  instant character count and word count statistics for a given text. Textutils reports of words and Characters. Thus it is suitable for writing text with word/Character Limit.Free to Use" signifies accessibility and openness, fostering creativity and collaboration. It liberates ideas, empowering individuals and communities to innovate without constraints. Let's celebrate the freedom to explore, create, and share, enriching lives and shaping a brighter future together...
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                This word counter software works in any web Browsers such as Chrome,Microsoft edge,Firefox,Internet explorer,safari.opera.. It suits to count Characters in Facebook ,Blog,books Excel document ,pdf documents, Essay etc...Browser Compatible ensures seamless experiences across different web browsers, promoting accessibility and usability. It signifies harmony in design and functionality, enabling users to navigate and interact with websites effortlessly. Embracing browser compatibility enhances reach and user satisfaction, fostering a cohesive online presence across diverse platforms...
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container mt-2 pb-2">
        <button onClick={toggleStyle} className="btn btn-primary">
          {btnText}
        </button>
      </div> */}
    </div>

  );
}
