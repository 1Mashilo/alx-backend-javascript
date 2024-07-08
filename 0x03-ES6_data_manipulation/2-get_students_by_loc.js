const getStudentsByLocation = (students, city) => {
  const studentsByCity = students.filter(student => student.location === city);
  return studentsByCity;
};

export default getStudentsByLocation;

