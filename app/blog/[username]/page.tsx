type Props = {
  params: {
    username: string;
  };
};

export default function page({ params }: Props) {
  return <div>Most recent Blogs From user: {params.username}!</div>;
}
