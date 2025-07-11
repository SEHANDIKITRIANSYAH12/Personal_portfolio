type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Sehan Diki — 3D Portfolio",
    fullName: "Sehan Diki Triansyah",
    email: "sehandiki@example.com",
  },
  hero: {
    name: "Sehan Diki Triansyah",
    p: ["I'm a 6th-semester student at Gunadarma University", "with a passion for web development, Artificial Intelligence, and 3D visuals."],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I am a student in my 6th semester at Gunadarma University, majoring in Informatics Engineering. I have a strong interest in web development and am always eager to learn new technologies. I am proficient in JavaScript and have experience with frameworks like React and Node.js. I am a dedicated and hardworking individual, ready to contribute to real-world projects and bring creative ideas to life!`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Education.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
