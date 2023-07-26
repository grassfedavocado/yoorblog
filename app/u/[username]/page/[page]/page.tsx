type Props = {
  params: {
    username: string;
    page?: string;
  };
};

export default function UsernamePage({ params }: Props) {
  const page = params?.page ?? 1;

  return (
    <main>
      <p>hello world from page {page}</p>
    </main>
  );
}
