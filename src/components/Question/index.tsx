import { Container, Content, Footer, UserInfo, Img, Name } from "./styles";

interface Props {
	content: string;
	author: {
		name: string;
		avatar: string;
	};
}

export const Question: React.FC<Props> = ({ content, author, children }) => (
	<Container>
		<Content>{content}</Content>
		<Footer>
			<UserInfo>
				<Img src={author.avatar} alt={author.name} />
				<Name>{author.name}</Name>
			</UserInfo>
			{children}
		</Footer>
	</Container>
);
