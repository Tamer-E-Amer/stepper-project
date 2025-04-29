# 🪜 Stepper Project

A fully dynamic and responsive Stepper component built with **React.js** and styled using **Tailwind CSS**.  
This component is ideal for creating **multi-step forms**, such as those found in **job applications**, **registration processes**, or **survey forms**.

---

## ✨ Features

- 🛠️ **Fully dynamic stepper**: Easily add, update, or delete steps by editing a simple data file.
- 🖌️ **Styled with Tailwind CSS**: Clean, responsive, and modern design out of the box.
- 📋 **Customizable**: Adjust labels, descriptions, and step order effortlessly.
- 🔥 **Perfect for multi-step forms**: Ideal for workflows like job applications, onboarding, surveys, and more.

---

## 📂 Stepper Data Structure

The steps are managed through a **single data file** that contains an **array of objects**.  
Each object represents one step in the process.

### Example of the stepper data structure:

```javascript
// data.js
export const stepperData = [
  {
    id: 1,
    title: 'personal data',
    description: 'Here is the form of Personal data',
  },
  {
    id: 2,
    title: 'education',
    description: 'This is the form of Education',
  },
  {
    id: 3,
    title: 'experience',
    description: 'This is form of your experiences',
  },
  {
    id: 4,
    title: 'hobbies',
    description: 'This is form of your Hobbies',
  },
];
```

## 📸 Demo

> **Coming Soon!**  
> [It will be here](http://link.com)

---

## 📸 Screenshots / Demo

Here are some screenshots showcasing the features of the project:

![Screenshot 1](public/imgPrev1.png)

![Screenshot 2](public/imgPrev2.png)

![Screenshot 3](public/imgPrev.png)

## 🛠️ Installation and Usage

Follow these steps to run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/Tamer-E-Amer/stepper-project.git

```

### 2. Navigate into the project directory

```bash
cd stepper
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Change some Data in data.js and try the stepper functionality

```javascript
// data.js
export const stepperData = [
  {
    id: 1,
    title: 'personal data',
    description: 'Here is the form of Personal data',
  },
  {
    id: 2,
    title: 'education',
    description: 'This is the form of Education',
  },
  {
    id: 3,
    title: 'experience',
    description: 'This is form of your experiences',
  },
  {
    id: 4,
    title: 'hobbies',
    description: 'This is form of your Hobbies',
  },
  // Additional steps
  {
    id: 5,
    title: 'Other',
    description: 'Here you can shar with us any other informayion you want',
  },
  {
    id: 6, // Try also to delete the object of id 6 and test the stepper
    title: 'Final test',
    description: 'This is the final test',
  },
];
```

## 📋 Technologies Used

- ⚛️ **React.js** — Frontend library for building the UI
- 🎨 **Tailwind CSS** — Utility-first CSS framework for styling
- ⚡ **Vite.js** — Lightning fast development build tool

## 🤝 Contributing

Contributions are welcome!  
If you have ideas for improvements or new features, feel free to open an issue or submit a pull request.

## 📄 License

This project is licensed under the [MIT License].

## 📬 Contact

Created with ❤️ by [Tamer Amer]
