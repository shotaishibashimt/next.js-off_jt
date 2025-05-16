type User = {
	name: string;
	age: number;
	fruits: string[];
};

const user: User = {
	name: "Hanako",
	age: 22,
	fruits: ["りんご", "バナナ", "みかん"],
};

function getProfile(user: User): string {
	return `${user.name} (${user.age}歳)`;
}
