import strawberry


@strawberry.type
class User:
	first_name: str
<<<<<<< HEAD
	age: int
=======
	last_name: str
	username: str
	password: str
>>>>>>> 2071a19 (Created the connection to the database from the backend, along with a test that tests the connection)
