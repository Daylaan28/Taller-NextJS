import RootLayout from "./RootLayout";

const Page = () => {
  return (
    <RootLayout pageTitle="Página de Estudiantes" themeColor="#F4C9D9">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl text-purple_primary">Bienvenido a la gestión de notas</h1>
        <p className="mt-4 text-gray_primary">
          Aquí podrás gestionar las notas de los estudiantes de manera eficiente.
        </p>
      </div>
    </RootLayout>
  );
};

export default Page;
