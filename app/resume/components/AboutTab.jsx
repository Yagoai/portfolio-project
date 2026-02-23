import { TabsContent } from "@/components/ui/tabs";

export default function AboutTab({ data }) {
  return (
    <TabsContent value="about" className="w-full text-center xl:text-left">
      <div className="flex flex-col gap-[30px]">
        <h3 className="text-4xl font-bold">{data.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
          {data.description}
        </p>
        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-x-10 max-w-[800px] mx-auto xl:mx-0">
          {data.info.map((item, index) => {
            return (
              <li
                key={index}
                className="flex items-center justify-center xl:justify-start gap-4"
              >
                <span className="text-white/60">{item.fieldName}</span>
                <span className="text-xl">{item.fieldValue}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </TabsContent>
  );
}
