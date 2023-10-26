import { createContext, useContext } from "react";
import { FlowData } from "../../../types";
import { SetValueType, useSetValue } from "../hooks/use-value-set";

type LayoutContextType = {
  nodeItem: SetValueType<FlowData>;
};

const initialData: LayoutContextType = {
  nodeItem: {
    set: () => null,
    value: {
      description: "",
      longDescription: "",
      name: "",
      links: [],
      emoji: "",
    },
  },
};

type Props = {
  children: React.ReactNode;
};

const NodeContext = createContext<LayoutContextType>(initialData);

export const useNodeContext = () => {
  return useContext(NodeContext);
};

export const NodeContextProvider = ({ children }: Props) => {
  const nodeItem = useSetValue(initialData.nodeItem.value);

  return (
    <NodeContext.Provider
      value={{
        nodeItem,
      }}
    >
      {children}
    </NodeContext.Provider>
  );
};
