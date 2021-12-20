import moment from "moment"

const formatDate = val => {
  return moment(val).format("DD MMM")
}

export default formatDate