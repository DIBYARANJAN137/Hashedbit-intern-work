const input = [
    {
      student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37,
      }
    },
    {
      student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37,
      }
    },
    {
      student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37,
      }
    }
  ];
  
  const output1 = input.map(studentObj => {
    let key = Object.keys(studentObj)[0];
    let marks = Object.values(studentObj[key]);
    let avg = marks.reduce((a, b) => a + b, 0) / marks.length;
    return {
      [key]: { average: Math.floor(avg) }
    };
  });
  
  console.log(output1);
  