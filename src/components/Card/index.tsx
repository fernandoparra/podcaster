export interface CardProps {
  children: React.ReactNode;
}

export const Card = ({children}: CardProps) => {
  return (
    <div className="w-full p-4 border border-gray-200 rounded-sm shadow-md">
      {children}
    </div>
  );
};
