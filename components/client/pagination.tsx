type Props = {
  offset: number;
  maxOffset: number;
  limit: number;
};

export default function Pagination(props: Props) {
  console.log(props);
  return <div className="text-md text-white">pagination</div>;
}
