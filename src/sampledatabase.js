// Sample user data


let users = [
  { id: 1,
    firstname: "Clark",
    lastname: "Kent",
    email: "clark.kent@metropolis.com",
    password: "hero1",
    avatar: "Placeholder"
  },
  {
    id: 2,
    firstname: "Bruce",
    lastname: "Wayne",
    email: "bruce.wayne@gotham.com",
    password: "hero2",
    avatar: "placeholder"
  }
];

let days = [
  {
    id: 1,
    day: "Monday"
  },
  {
    id: 2,
    day: "Tuesday"
  },
  {
    id: 3,
    day: "Wednesday"
  },
  {
    id: 4,
    day: "Thursday"
  },
  {
    id: 5,
    day: "Friday"
  }
];

let habits = [
  { "1" : [{ // The key for this section is the user id and is used to aggregate the habits

      id: 1, // habit id key
      days_id: 1,
      name: "flying",
      notes: "Practice levatating for 1 hour per day",
      start_time: "9am",
      duration: 60,
      timestamp: "TBD",
      completed: false
    },
    {
      id: 2,
      days_id: 2,
      name: "Strength building",
      notes: "Lift a 2 ton rock for 30 minutes",
      start_time: "10am",
      duration: 30,
      timestamp: "TBD",
      completed: false
    }]
  },
  { "2" : [{

      id: 3,
      days_id: 5,
      name: "Throwing",
      notes: "Practice throwing a boomerang 30 minutes per day", // We should probably add time to the table
      start_time: "5pm",
      duration: 30,
      timestamp: "TBD",
      completed: false
    },
    {
      id: 4,
      days_id: 1,
      name: "Hiding",
      notes: "Practice being invisible all day",
      start_time: "12am",
      duration: 1440,
      timestamp: "TBD",
      completed: false
    }]
  },

]