interface propsT {
  date: Date;
}

export default function PublishDate({ date }: propsT) {
  const mois = (): string => {
    switch (date.getMonth()) {
      case 0:
        return "janvier";
      case 1:
        return "février";
      case 2:
        return "mars";
      case 3:
        return "avril";
      case 4:
        return "mai";
      case 5:
        return "juin";
      case 6:
        return "juillet";
      case 7:
        return "août";
      case 8:
        return "septembre";
      case 9:
        return "octobre";
      case 10:
        return "novembre";
      case 11:
        return "décembre";
      default:
        return "Mois invalide";
    }
  };
  const jour = date.getDate();
  const year = date.getFullYear();
  return (
    <>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        Published on {mois()} {jour}, {year}
      </p>
    </>
  );
}
