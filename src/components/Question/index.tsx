import {
	Container,
	Content,
	Footer,
	UserInfo,
	UserImg,
	UserName,
	ChildrenContainer,
} from "./styles";

interface Props {
	content: string;
	author: {
		name: string;
		avatar: string;
	};
	isAnswered?: boolean;
	isHighlighted?: boolean;
}

export const Question: React.FC<Props> = ({
	content,
	author,
	isAnswered,
	isHighlighted,
	children,
}) => (
	<Container
		isAnswered={isAnswered}
		isHighlighted={isHighlighted && !isAnswered}
	>
		<Content>{content}</Content>
		<Footer>
			<UserInfo>
				<UserImg src={author.avatar} alt={author.name} />
				<UserName isAnswered={isAnswered} isHighlighted={isHighlighted}>
					{author.name}
				</UserName>
			</UserInfo>
			<ChildrenContainer>{children}</ChildrenContainer>
		</Footer>
	</Container>
);
