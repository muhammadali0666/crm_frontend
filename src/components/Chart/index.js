const [deleteInfo, setDeletInfo] = useState([])
const [studentList, setStudentList] = useState([])

useEffect(() => {
  fetch("http://localhost:4001/get_deleted")
    .then((res) => res.json())
    .then((data) => setDeletInfo(data))
    .catch((err) => console.log(err));
}, []);

useEffect(() => {
  fetch("http://localhost:4001/get_students")
    .then((res) => res.json())
    .then((data) => setStudentList(data));
}, []);

//  let spr = [...deleteInfo]

//  console.log(deleteInfo);
