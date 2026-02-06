
export interface CapabilityItem {
  category: string;
  knowledge: string[];
  output: string[];
  priority: string;
}

export interface KnowledgePointDetail {
  title: string;
  tags: string[];
  advice: string;
  code?: {
    language: string;
    content: string;
    description?: string;
  };
}

export interface LearningStage {
  id: string;
  title: string;
  duration: string;
  goal: string;
  knowledgePoints: KnowledgePointDetail[];
  criteria: string;
  description: string;
  relatedCategories: string[];
  deepDive: {
    title: string;
    content: string;
  }[];
}

export interface ResourceSection {
  category: string;
  links: { title: string; url: string; description: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  scenario: string;
  stack: string[];
  difficulties: string[];
  criteria: string;
}

export interface InterviewQuestion {
  module: string;
  question: string;
  answer: string;
}

export interface TipItem {
  title: string;
  description: string;
  category: string;
  content: string;
}

export interface PlatformItem {
  name: string;
  type: string;
  description: string;
  strengths: string[];
  integration: string[];
  devFocus: string;
}

export interface PlatformComparison {
  name: string;
  type?: string;
  extensionLimit: string;
  costModel: string;
  deployment: string;
  fitFor: string;
}

export const learningPathData = {
  title: "AI应用高级工程师学习路线",
  subtitle: "构建企业级智能体、RAG知识库与知识图谱系统的全栈工程落地指南",
  
  capabilityModel: [
    {
      category: "AI辅助研发与效能工程 (AI Efficiency Engineering)",
      knowledge: [
        "AI编程IDE精通: Cursor (Composer/Rules), Windsurf, Copilot",
        "指令驱动开发 (Prompt-Driven Development): Spec-Kit, SDD",
        "自动化工作流: n8n, Dify, Make",
        "跨端极速交付: Expo, v0.dev, Supabase"
      ],
      output: [
        "使用Cursor + v0在1天内完成全栈SaaS原型开发",
        "搭建n8n自动化工作流，实现GitHub PR自动Code Review",
        "构建企业级Cursor Rules配置库，统一团队代码风格"
      ],
      priority: "高 (新一代架构师核心)"
    },
    {
      category: "智能体与多模态应用 (Agent & Multimodal)",
      knowledge: [
        "Agent框架: LangGraph, AutoGen, MetaGPT, Coze/Bisheng (Low-code)",
        "多模态大模型: Qwen-VL, GLM-4V, 视觉理解与视频分析",
        "工具调用标准: MCP (Model Context Protocol), OpenAI Function Calling",
        "多智能体强化学习 (MARL): 复杂任务协作与决策优化"
      ],
      output: [
        "开发具备视觉能力的本地生活推荐Agent (识别菜品/菜单)",
        "实现基于Bisheng/Dify的企业级知识库问答与工作流编排",
        "构建多智能体协作系统，模拟供应链调度或复杂办公流程"
      ],
      priority: "高 (核心竞争力)"
    },
    {
      category: "RAG 与知识库 (Retrieval-Augmented Generation)",
      knowledge: [
        "向量数据库原理与调优 (Milvus/Weaviate/Elasticsearch)",
        "高级检索策略: Hybrid Search, Rerank, Parent Document Retriever",
        "文档解析 (PDF/Excel/Markdown) 与分块 (Chunking) 策略"
      ],
      output: [
        "搭建一套垂直领域知识库，解决文档召回不准的问题",
        "对比并在报告中展示：只用向量检索 vs 混合检索+重排序的准确率差异",
        "产出：RAG评测报告 (基于Ragas或TruLens)"
      ],
      priority: "高 (必备技能)"
    },
    {
      category: "知识图谱与图数据库 (Knowledge Graph)",
      knowledge: [
        "图数据库操作: Neo4j & Cypher Query Language",
        "图谱构建: 实体抽取(NER)、关系抽取(RE)、本体建模(Ontology)",
        "GraphRAG: 结合图结构的检索增强生成"
      ],
      output: [
        "从非结构化文本（如新闻或财报）中自动抽取实体关系构建图谱",
        "实现基于Cypher的多跳推理问答",
        "产出：可视化图谱展示Demo与GraphRAG查询接口"
      ],
      priority: "中/高 (进阶加分项)"
    },
    {
      category: "模型训练与微调 (Fine-tuning)",
      knowledge: [
        "微调技术: PEFT, LoRA, QLoRA",
        "数据工程: 指令微调数据集构建 (Instruction Tuning Data), Self-Instruct",
        "显存优化: DeepSpeed, FSDP, 4-bit/8-bit Quantization"
      ],
      output: [
        "微调一个7B模型使其具备特定的风格或格式化输出能力",
        "使用LoRA适配器进行特定任务优化",
        "产出：Hugging Face Model Card与训练Loss曲线分析"
      ],
      priority: "中 (特定场景需求)"
    },
    {
      category: "企业系统集成 (Enterprise Integration)",
      knowledge: [
        "API规范: RESTful, gRPC, OpenAPI",
        "鉴权与安全: OAuth2.0 / OIDC Flow, API Gateway",
        "容器化部署: Docker & Kubernetes, Helm Charts",
        "业务系统对接: ERP/MES集成, 数据库读写API设计"
      ],
      output: [
        "将Agent封装为标准API服务，并集成OAuth2认证",
        "编写Helm Chart将RAG服务部署到K8s集群，实现HPA",
        "实现AI Agent与企业ERP系统的双向数据交互"
      ],
      priority: "中/高 (落地必修)"
    }
  ] as CapabilityItem[],

  learningStages: [
    {
      id: "stage-0",
      title: "阶段零：AI驱动开发与效能跃迁",
      duration: "1-2周",
      goal: "掌握Cursor/Windsurf等AI IDE与指令驱动开发模式，实现10倍开发提效。",
      knowledgePoints: [
        {
          title: "AI IDE 实战 (Cursor/Windsurf)",
          tags: ["IDE", "Prompt Engineering"],
          advice: "不要只用 Tab 补全。核心在于掌握 Composer (Cmd+I) 进行多文件编辑，以及使用 @Symbols @Docs 引用上下文。建议将常用 Prompt 固化为 .cursorrules。",
          code: {
            language: "markdown",
            content: `// .cursorrules 示例
- You are an expert in React 19 and Tailwind v4.
- Prefer functional components and custom hooks.
- Use 'lucide-react' for icons.
- When fixing bugs, explain the root cause first.`,
            description: "项目根目录的 .cursorrules 文件，让 AI 自动遵守团队规范。"
          }
        },
        {
          title: "指令驱动开发 (PDD)",
          tags: ["Methodology", "Spec"],
          advice: "写代码前先写 Markdown Spec。定义好 Interface、Data Structure 和 Edge Cases，然后让 AI 一次性生成。这比边写边改快得多。",
          code: {
            language: "markdown",
            content: `## User Story
As a user, I want to upload a PDF and get a summary.

## API Interface
POST /api/upload
- Input: Multipart file (pdf)
- Output: { id: string, summary: string }

## Constraints
- Max file size: 10MB
- Supported formats: PDF only`,
            description: "一个简单的功能 Spec 示例，直接喂给 Composer 生成代码。"
          }
        },
        {
          title: "自动化工作流 (n8n)",
          tags: ["Automation", "Low-Code"],
          advice: "n8n 的核心优势是 'Code Node'。不要试图用复杂的 UI 逻辑节点去拼凑，直接写一段 JavaScript 处理数据转换通常更高效且易维护。",
          code: {
            language: "javascript",
            content: `// n8n Code Node Example
// Filter items where price > 100
return items.filter(item => {
  return item.json.price > 100;
});`,
            description: "n8n 中使用 Code 节点进行灵活的数据过滤。"
          }
        }
      ],
      criteria: "不写一行代码，仅通过Prompt和Cursor完成一个包含数据库的Todo List全栈应用开发与部署。",
      description: "本阶段的目标不是写代码，而是学会'不写代码'。作为新一代架构师，你需要从Coding转变为Directing，利用AI工具链将开发效率提升至极限。",
      relatedCategories: ["AI编程辅助 & 自动化 (AI Efficiency)", "低代码与多模态 (Low-Code & Multimodal)"],
      deepDive: [
        {
          title: "Cursor IDE 高级技巧",
          content: "Cursor 不仅仅是一个编辑器，它是一个基于 Context 的代码生成器。核心技巧包括：\n1. **.cursorrules**: 在项目根目录定义项目特定的 Prompt，强制 AI 遵守代码规范。\n2. **Composer**: 利用 Composer 模式进行多文件编辑和重构，而不是在单文件中对话。\n3. **Context Management**: 学会使用 @Web, @Docs, @Codebase 精准控制上下文，避免 Token 浪费和幻觉。"
        },
        {
          title: "Prompt-Driven Development (PDD)",
          content: "传统的开发流程是：需求 -> 设计 -> 编码。PDD 的流程是：Spec (Markdown) -> Prompt -> Code。核心在于编写高质量的 Spec 文档，明确 API 接口、数据结构和边界条件，然后让 AI 一次性生成。"
        }
      ]
    },
    {
      id: "stage-1",
      title: "阶段一：工程基础与NLP入门",
      duration: "2-3周",
      goal: "夯实Python工程能力，理解现代NLP的基本概念。",
      knowledgePoints: [
        {
          title: "Python 进阶 (Type Hinting & Pydantic)",
          tags: ["Python", "Engineering"],
          advice: "Agent 开发中 80% 的错误源于数据格式不对。Pydantic 是 LLM 输出结构化的基石。必须掌握 v2 版本的 `model_validate` 和 `Field` 定义。",
          code: {
            language: "python",
            content: `from pydantic import BaseModel, Field

class UserIntent(BaseModel):
    intent: str = Field(..., description="用户的核心意图")
    confidence: float = Field(..., ge=0, le=1)
    entities: list[str] = Field(default_factory=list)

# 验证数据
data = {"intent": "book_flight", "confidence": 0.95}
intent = UserIntent.model_validate(data)`,
            description: "定义严格的数据模型，用于 Structured Output。"
          }
        },
        {
          title: "API 开发 (FastAPI)",
          tags: ["Backend", "API"],
          advice: "利用 FastAPI 的 `Depends` 进行依赖注入，特别是数据库连接和鉴权逻辑。自动生成的 Swagger 文档是调试 Agent 工具调用的神器。",
          code: {
            language: "python",
            content: `from fastapi import FastAPI, Depends

app = FastAPI()

async def verify_token(token: str):
    if token != "secret": raise HTTPException(401)

@app.get("/items/", dependencies=[Depends(verify_token)])
async def read_items():
    return [{"item_id": 1}]`,
            description: "FastAPI 依赖注入与鉴权中间件示例。"
          }
        },
        {
          title: "NLP 基础 (Tokenization & Embedding)",
          tags: ["NLP", "Theory"],
          advice: "不要只把 Token 当作字符。理解 Token 边界对 Prompt 的影响（比如 GPT 分词器如何处理空格）。Embedding 是语义搜索的核心，理解 Cosine Similarity 的几何意义。",
          code: {
            language: "python",
            content: `import tiktoken

enc = tiktoken.get_encoding("cl100k_base")
tokens = enc.encode("Hello, world!")
print(tokens) # [9906, 11, 1917, 0]
print(len(tokens)) # 4 (not 2 words!)`,
            description: "使用 tiktoken 查看文本的 Token 编码，理解 Token 消耗。"
          }
        }
      ],
      criteria: "使用FastAPI写一个简单的文本分类API，输入文本，调用Hugging Face的小模型进行情感分析，返回JSON结果，并包含Swagger文档。",
      description: "万丈高楼平地起。在进入复杂的 Agent 开发之前，你需要确保你的 Python 工程底座足够坚实，并且理解 Transformer 的基本工作原理。",
      relatedCategories: ["基础编程与工程 (Python/API)", "NLP与深度学习基础"],
      deepDive: [
        {
          title: "现代 Python 工程化",
          content: "摆脱脚本小子的思维。学习使用 Poetry 进行依赖管理，使用 Pydantic 进行严格的数据校验（这在 Agent 开发中至关重要），掌握 Asyncio 异步编程以应对高并发的 LLM API 调用。"
        },
        {
          title: "Transformer 直觉",
          content: "不需要你会手推公式，但你需要理解 Attention 机制是如何工作的，什么是 Embedding 向量空间，以及 Token 是如何被模型处理的。这将帮助你更好地理解 Context Window 和 Retrieval 的原理。"
        }
      ]
    },
    {
      id: "stage-2",
      title: "阶段二：LLM应用与RAG实战",
      duration: "3-4周",
      goal: "掌握Prompt Engineering，学会使用向量数据库解决大模型幻觉问题。",
      knowledgePoints: [
        {
          title: "Prompt Engineering (CoT & Structured)",
          tags: ["LLM", "Prompt"],
          advice: "少样本提示 (Few-Shot) 永远是提升效果性价比最高的手段。对于复杂逻辑，强制要求模型先输出思维链 (Thought)，再输出最终答案 (Answer)。",
          code: {
            language: "python",
            content: `prompt = """
Q: 2+2*2=?
A: Let's think step by step. 
1. Multiplication comes before addition.
2. 2*2 = 4.
3. 2+4 = 6.
The answer is 6.

Q: 3+3*3=?
A: Let's think step by step.
"""`,
            description: "Chain-of-Thought (CoT) + Few-Shot 提示模板。"
          }
        },
        {
          title: "RAG Pipeline (Chunking & Retrieval)",
          tags: ["RAG", "VectorDB"],
          advice: "文档切分（Chunking）不要只按字符长度切。尽量按语义（段落、标题）切分。重叠（Overlap）窗口很重要，避免切断上下文。",
          code: {
            language: "python",
            content: `from langchain.text_splitter import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=50,
    separators=["\\n\\n", "\\n", " ", ""]
)
docs = splitter.create_documents([long_text])`,
            description: "使用 LangChain 进行递归字符切分，优先保留段落结构。"
          }
        },
        {
          title: "向量数据库 (Milvus/Weaviate)",
          tags: ["Database", "Infra"],
          advice: "理解 HNSW 索引的 Trade-off（查询速度 vs 内存占用）。生产环境务必分离计算节点和存储节点。Metadata Filtering 是提升检索准确率的关键。",
          code: {
            language: "python",
            content: `client.search(
    collection_name="knowledge_base",
    data=[query_vector],
    filter="category == 'finance' and year >= 2023",
    limit=5
)`,
            description: "结合元数据过滤（Metadata Filtering）进行向量检索，缩小搜索范围。"
          }
        }
      ],
      criteria: "搭建一个“个人知识库助手”。用户上传PDF，系统自动切分存入向量库，用户提问后基于文档内容回答，并标注引用的段落来源。",
      description: "RAG (检索增强生成) 是目前企业落地大模型最主流的模式。本阶段你将深入 RAG 的每一个环节，从文档切分到向量检索，再到最终的生成。",
      relatedCategories: ["LLM应用与RAG"],
      deepDive: [
        {
          title: "Advanced RAG 策略",
          content: "基础 RAG 很容易做，但要在生产环境达到高可用很难。你需要掌握：\n1. **Hybrid Search**: 结合关键词检索 (BM25) 和向量检索，弥补单一检索的缺陷。\n2. **Rerank**: 在检索召回后，使用高精度的 Rerank 模型对结果进行重排序，大幅提升准确率。\n3. **Chunking Strategy**: 针对不同文档类型（PDF表格、Markdown）设计不同的切分策略。"
        }
      ]
    },
    {
      id: "stage-3",
      title: "阶段三：Agent智能体与工具编排",
      duration: "4-5周",
      goal: "让LLM具备“手”和“脚”，能够与外部世界交互，处理复杂任务。",
      knowledgePoints: [
        {
          title: "Agent Patterns (ReAct)",
          tags: ["Agent", "Architecture"],
          advice: "理解 ReAct 的本质是 Loop：思考 -> 决定动作 -> 执行动作 -> 观察结果 -> 再思考。LangGraph 提供了更显式的状态机控制，比纯 ReAct 更稳定。",
          code: {
            language: "python",
            content: `from langgraph.graph import StateGraph

def reasoning_node(state):
    # LLM decides next step
    return {"next": "tool_call"}

workflow = StateGraph(AgentState)
workflow.add_node("reason", reasoning_node)
workflow.add_node("act", tool_executor)
workflow.add_edge("reason", "act")`,
            description: "使用 LangGraph 定义显式的 Agent 状态流转。"
          }
        },
        {
          title: "工具调用 (Function Calling)",
          tags: ["Tools", "API"],
          advice: "Tool 的描述（Description）就是 Prompt 的一部分，写得越清楚，模型调用越准。参数 Schema 必须与实际函数签名完全一致。",
          code: {
            language: "json",
            content: `{
  "name": "get_weather",
  "description": "Get current weather for a city",
  "parameters": {
    "type": "object",
    "properties": {
      "city": {"type": "string", "description": "City name, e.g. Beijing"}
    },
    "required": ["city"]
  }
}`,
            description: "OpenAI Function Calling 的 JSON Schema 定义。"
          }
        },
        {
          title: "MCP 标准 (Model Context Protocol)",
          tags: ["Standard", "Integration"],
          advice: "MCP 是未来的趋势。它解耦了 'AI 模型' 和 '数据/工具'。尝试编写一个简单的 MCP Server，暴露本地 SQLite 数据库给 Claude/Cursor 使用。",
          code: {
            language: "python",
            content: `from mcp.server import Server

server = Server("my-db-server")

@server.tool()
async def query_db(sql: str):
    return db.execute(sql).fetchall()`,
            description: "定义一个 MCP Server 工具，允许 AI 执行 SQL 查询。"
          }
        }
      ],
      criteria: "开发一个“旅行策划Agent”。它能根据用户模糊需求，调用“天气查询”、“航班搜索”、“酒店预订”三个不同的工具，最终生成一份包含价格预算的行程单。",
      description: "Agent 是 AI 应用的皇冠明珠。从简单的工具调用到复杂的多智能体协作，本阶段将带你探索 LLM 的决策与规划能力。",
      relatedCategories: ["智能体 (Agent) 框架与编排", "AI编程辅助 & 自动化 (AI Efficiency)"],
      deepDive: [
        {
          title: "Agent 设计模式",
          content: "理解 ReAct (Reasoning + Acting) 循环是基础。进阶则需要掌握 Plan-and-Solve（先规划后执行）和 Reflexion（自我反思）模式。在复杂场景下，单一 Agent 往往不够用，你需要学习设计 Multi-Agent 系统，让不同的 Agent 扮演专家角色进行协作。"
        },
        {
          title: "MCP (Model Context Protocol)",
          content: "这是 Anthropic 推出的新标准，旨在标准化 LLM 与外部数据/工具的连接。学习如何编写 MCP Server，让你的 Agent 能够以标准化的方式访问本地文件、数据库或第三方 API。"
        }
      ]
    },
    {
      id: "stage-4",
      title: "阶段四：知识图谱与GraphRAG",
      duration: "3-4周",
      goal: "引入结构化知识，解决复杂关系推理问题。",
      knowledgePoints: [
        {
          title: "图数据库 (Neo4j & Cypher)",
          tags: ["Graph", "Database"],
          advice: "图数据库的核心是 '关系'。Cypher 语言类似 SQL 但更侧重路径匹配。学会使用 `MATCH (n)-[r]->(m)` 语法查询关联数据。",
          code: {
            language: "cypher",
            content: `MATCH (p:Person)-[:INVESTED_IN]->(c:Company)
WHERE c.revenue > 1000000
RETURN p.name, c.name`,
            description: "查询所有投资了高营收公司的投资人姓名。"
          }
        },
        {
          title: "GraphRAG 实现",
          tags: ["RAG", "Graph"],
          advice: "GraphRAG 不仅仅是检索节点。重点在于 'Community Detection'（社区发现），让 LLM 生成社区摘要，从而回答 '这个数据集主要讲了什么' 这类全局问题。",
          code: {
            language: "python",
            content: `# 伪代码：GraphRAG 流程
entities = llm.extract_entities(text)
graph.add_nodes(entities)
communities = graph.detect_communities()
summaries = llm.summarize(communities)
answer = llm.generate(query, context=summaries)`,
            description: "GraphRAG 的核心流程：实体提取 -> 图构建 -> 社区摘要 -> 全局问答。"
          }
        }
      ],
      criteria: "构建一个简单的“企业股权穿透图谱”。输入多份企业财报文本，自动抽取“股东-持股-公司”关系存入Neo4j，并能回答“A公司的实际控制人是谁？”这类问题。",
      description: "当向量检索遇到多跳推理（Multi-hop Reasoning）时往往束手无策。知识图谱 (KG) 为 LLM 提供了结构化的外部脑，GraphRAG 则是连接两者的桥梁。",
      relatedCategories: ["知识图谱 (KG) 与图数据库"],
      deepDive: [
        {
          title: "GraphRAG 原理",
          content: "微软提出的 GraphRAG 通过 LLM 提取实体和关系构建图谱，并生成社区摘要（Community Summary）。在回答问题时，它不仅检索具体的点，还能利用图的拓扑结构进行全局性的回答（Global Answer），这在处理“总结性问题”时效果显著。"
        }
      ]
    },
    {
      id: "stage-5",
      title: "阶段五：模型微调与训练",
      duration: "3周",
      goal: "掌握定制化模型的能力，不仅限于Prompt调优。",
      knowledgePoints: [
        {
          title: "高效微调 (PEFT/LoRA)",
          tags: ["Training", "Optimization"],
          advice: "LoRA 是性价比之选。理解 Rank (r) 和 Alpha 的关系：Alpha/Rank 是缩放因子。通常 r=8 或 16 足够。Target Modules 通常选择 q_proj 和 v_proj。",
          code: {
            language: "python",
            content: `from peft import LoraConfig, get_peft_model

config = LoraConfig(
    r=8, 
    lora_alpha=16, 
    target_modules=["q_proj", "v_proj"],
    lora_dropout=0.05, 
    bias="none"
)
model = get_peft_model(base_model, config)`,
            description: "使用 Hugging Face PEFT 库配置 LoRA 适配器。"
          }
        },
        {
          title: "指令微调数据构建",
          tags: ["Data", "Engineering"],
          advice: "数据质量 > 数量。Alpaca 格式是标准：Instruction, Input, Output。确保数据的多样性和分布均衡，避免模型过拟合单一格式。",
          code: {
            language: "json",
            content: `[
  {
    "instruction": "Explain quantum computing like I'm 5.",
    "input": "",
    "output": "Imagine you have a magic coin that can be heads AND tails at the same time..."
  }
]`,
            description: "标准的 Alpaca 指令微调数据格式 JSON。"
          }
        }
      ],
      criteria: "基于Llama3或Qwen模型，使用LoRA微调一个“法律文书助手”。输入案情描述，微调后的模型能按标准法律格式输出起诉状草稿。",
      description: "Prompt Engineering 有其上限。当需要注入特定领域知识或强制模型遵循复杂的输出格式时，微调 (Fine-tuning) 是必不可少的手段。",
      relatedCategories: ["NLP与深度学习基础"],
      deepDive: [
        {
          title: "高效微调 (PEFT)",
          content: "全量微调成本过高。LoRA (Low-Rank Adaptation) 通过冻结原模型权重，只训练少量新增的秩分解矩阵，极大地降低了显存需求。你需要理解 Rank 和 Alpha 参数对训练效果的影响，以及如何准备高质量的 Instruction Tuning 数据集。"
        }
      ]
    },
    {
      id: "stage-6",
      title: "阶段六：企业级集成、部署与可观测性",
      duration: "持续进行",
      goal: "将Demo转化为高可用、可监控的生产服务。",
      knowledgePoints: [
        {
          title: "高并发推理 (vLLM)",
          tags: ["Deployment", "Performance"],
          advice: "vLLM 的 PagedAttention 极大提升了吞吐量。学会使用 OpenAI Compatible Server 接口启动服务，这样可以无缝替换 LangChain 中的 OpenAI 模型。",
          code: {
            language: "bash",
            content: `python -m vllm.entrypoints.openai.api_server \\
  --model Qwen/Qwen2.5-7B-Instruct \\
  --port 8000 \\
  --gpu-memory-utilization 0.9`,
            description: "一行命令启动兼容 OpenAI API 的 vLLM 推理服务。"
          }
        },
        {
          title: "可观测性 (LangSmith/Phoenix)",
          tags: ["Ops", "Monitoring"],
          advice: "不要盲跑 Agent。在生产环境必须开启 Tracing。重点监控 Latency（延迟）和 Token Usage（成本）。LangSmith 可以可视化整个 ReAct 思考链。",
          code: {
            language: "python",
            content: `import os
os.environ["LANGCHAIN_TRACING_V2"] = "true"
os.environ["LANGCHAIN_API_KEY"] = "ls__..."

# 之后的 LangChain 调用都会自动上传 Trace`,
            description: "开启 LangChain Tracing V2，实时监控 Agent 运行状态。"
          }
        }
      ],
      criteria: "将之前的“旅行策划Agent”容器化，部署到K8s中，配置Grafana监控面板显示QPS与Token使用量，并接入LangSmith查看完整的调用Trace。",
      description: "Demo 到 Production 的距离，往往比从 0 到 Demo 还要远。本阶段关注系统的稳定性、性能、安全和可观测性，这是架构师的必修课。",
      relatedCategories: ["基础编程与工程 (Python/API)"],
      deepDive: [
        {
          title: "LLM Ops",
          content: "不仅仅是部署。你需要考虑 Token 的流式传输 (Streaming)、高并发下的 Batching 策略 (vLLM)、以及 GPU 资源的调度。此外，对 Agent 的每一步思考过程进行 Trace（使用 LangSmith），是调试复杂 Agent 的唯一有效手段。"
        }
      ]
    }
  ] as LearningStage[],

  resources: [
    {
      category: "AI编程辅助 & 自动化 (AI Efficiency)",
      links: [
        { title: "Cursor Documentation", url: "https://docs.cursor.com/", description: "掌握AI Native IDE的核心用法" },
        { title: "n8n Templates", url: "https://n8n.io/workflows", description: "海量自动化工作流模板" },
        { title: "GitHub Spec Kit", url: "https://github.com/github/spec-kit", description: "规范驱动开发(SDD)工具包" },
        { title: "LangGPT Prompts", url: "https://github.com/langgptai/wonderful-prompts", description: "高质量中文Prompt精选" },
        { title: "Windsurf Manual", url: "https://codeium.com/windsurf", description: "Codeium推出的AI编程编辑器" }
      ]
    },
    {
      category: "低代码与多模态 (Low-Code & Multimodal)",
      links: [
        { title: "Bisheng Platform", url: "https://github.com/dataelement/bisheng", description: "企业级开源LLM应用开发平台" },
        { title: "Coze 插件开发", url: "https://www.coze.cn/docs/guides/extension_development", description: "为Coze开发自定义插件" },
        { title: "Qwen-VL Docs", url: "https://qwen.readthedocs.io/en/latest/multimodal/qwen-vl.html", description: "通义千问多模态模型文档" },
        { title: "Dify 源码部署", url: "https://docs.dify.ai/v/zh-hans/getting-started/install-self-hosted", description: "企业级私有化部署指南" }
      ]
    },
    {
      category: "基础编程与工程 (Python/API)",
      links: [
        { title: "Pydantic Docs", url: "https://docs.pydantic.dev/", description: "学习定义严格的数据模型" },
        { title: "FastAPI Docs", url: "https://fastapi.tiangolo.com/", description: "现代Python API开发标准" },
        { title: "Async IO in Python", url: "https://docs.python.org/3/library/asyncio.html", description: "理解Event Loop和Awaitable" },
        { title: "Poetry Docs", url: "https://python-poetry.org/", description: "现代依赖管理工具" }
      ]
    },
    {
      category: "NLP与深度学习基础",
      links: [
        { title: "The Annotated Transformer", url: "http://nlp.seas.harvard.edu/2018/04/03/attention.html", description: "代码级拆解Transformer结构" },
        { title: "Hugging Face Course", url: "https://huggingface.co/course/chapter1/1", description: "官方NLP入门教程" },
        { title: "OpenAI Embeddings", url: "https://platform.openai.com/docs/guides/embeddings", description: "深入理解向量表示" }
      ]
    },
    {
      category: "LLM应用与RAG",
      links: [
        { title: "LangChain Docs", url: "https://python.langchain.com/docs/get_started/introduction", description: "框架核心概念概览" },
        { title: "Weaviate Concepts", url: "https://weaviate.io/developers/weaviate/concepts", description: "向量数据库核心概念" },
        { title: "LlamaIndex RAG", url: "https://docs.llamaindex.ai/en/stable/", description: "生产环境下的RAG优化技巧" },
        { title: "Milvus Docs", url: "https://milvus.io/docs", description: "分布式向量数据库架构" },
        { title: "Prompt Engineering Guide", url: "https://www.promptingguide.ai/", description: "最全的提示词工程指南" }
      ]
    },
    {
      category: "智能体 (Agent) 框架与编排",
      links: [
        { title: "LlamaIndex Agents", url: "https://docs.llamaindex.ai/en/stable/use_cases/agents/", description: "学习基于工作流的Agent编排" },
        { title: "MCP Specs", url: "https://modelcontextprotocol.io/", description: "最新的大模型工具调用标准协议" },
        { title: "OpenAI Function Calling", url: "https://platform.openai.com/docs/guides/function-calling", description: "原生模型调用函数" },
        { title: "LangGraph Docs", url: "https://langchain-ai.github.io/langgraph/", description: "构建循环和有状态的复杂Agent" },
        { title: "Microsoft AutoGen", url: "https://microsoft.github.io/autogen/", description: "多智能体对话框架" }
      ]
    },
    {
      category: "知识图谱 (KG) 与图数据库",
      links: [
        { title: "Neo4j Cypher", url: "https://neo4j.com/docs/cypher-manual/current/introduction/", description: "图查询语言教程" },
        { title: "W3C SPARQL", url: "https://www.w3.org/TR/sparql11-query/", description: "官方RDF图查询语言规范" },
        { title: "Microsoft GraphRAG", url: "https://microsoft.github.io/graphrag/", description: "微软GraphRAG原理与实现" }
      ]
    }
  ] as ResourceSection[],

  projects: [
    {
      id: "p0",
      title: "极速全栈交付：基于 Cursor + v0 的 SaaS 原型",
      scenario: "模拟“AI架构师”场景，从一句话需求到多端适配的完整应用。",
      stack: ["Cursor", "v0.dev", "Supabase", "React Native"],
      difficulties: ["Prompt-Driven Development实践", "AI生成的代码重构与优化", "跨端UI适配"],
      criteria: "不写核心代码，通过Cursor Composer和Prompts在2小时内完成一个包含登录、CRUD功能的移动端APP原型。"
    },
    {
      id: "p0_new",
      title: "本地生活服务智能助手 (多模态)",
      scenario: "结合外卖、团购场景，基于图片识别菜单与环境，推荐个性化服务。",
      stack: ["Qwen-VL/GLM-4V", "LangChain", "Vector DB"],
      difficulties: ["多模态信息融合", "基于LBS的推荐逻辑", "图片内容精准解析"],
      criteria: "上传一张餐厅菜单照片，Agent能识别菜品名称与价格，并结合用户偏好推荐套餐。"
    },
    {
      id: "p0_new2",
      title: "企业ERP智能集成助手 (n8n + Agent)",
      scenario: "打通企业MES/ERP系统，实现自然语言查询库存与订单状态。",
      stack: ["n8n", "Coze/Bisheng", "ERP API", "Python"],
      difficulties: ["低代码平台插件开发", "复杂业务流编排", "企业级权限控制"],
      criteria: "搭建n8n工作流，通过Webhook接收自然语言指令，查询模拟ERP数据库，并将结果通过飞书/钉钉返回。"
    },
    {
      id: "p1",
      title: "企业级文档 RAG 问答系统",
      scenario: "企业内部 Wiki/合同/技术文档的智能检索助手。",
      stack: ["LangChain", "Milvus", "Redis (Cache)", "FastAPI"],
      difficulties: ["PDF/Markdown表格解析", "混合检索 (Keyword + Vector)", "引文标注"],
      criteria: "上传一份包含复杂表格的财报PDF，提问“去年Q3营收多少”，准确回答并高亮原文位置。"
    },
    {
      id: "p2",
      title: "基于 SQL Agent 的 BI 数据助手",
      scenario: "老板输入自然语言查询销售数据，无需写 SQL。",
      stack: ["LlamaIndex Text-to-SQL", "MySQL", "Streamlit"],
      difficulties: ["复杂Schema理解", "防止SQL注入", "多表Join查询生成"],
      criteria: "面对“上季度销售额前三的销售员是谁”这种需要Join 3张表的问题，生成的SQL语法正确且结果无误。"
    },
    {
      id: "p3",
      title: "多智能体 (Multi-Agent) 客服协作平台",
      scenario: "自动处理退换货、技术支持、投诉等不同类型工单。",
      stack: ["LangGraph/AutoGen", "MCP Tools"],
      difficulties: ["Router路由准确性", "不同Agent间的上下文传递", "人工介入机制"],
      criteria: "模拟用户先问“怎么退货”，再问“那我不退了，这衣服怎么洗”，系统能平滑切换处理Agent且不丢失上下文。"
    },
    {
      id: "p4",
      title: "垂直领域知识图谱构建与 GraphRAG",
      scenario: "医疗/法律/金融领域的复杂关系挖掘与推理。",
      stack: ["Neo4j", "LLM Extraction", "NetworkX"],
      difficulties: ["实体对齐 (Entity Resolution)", "Text-to-Cypher准确率"],
      criteria: "输入一段新的病历文本，自动抽取症状-药品关系存入图谱，并能回答“该药品的禁忌症包含哪些”隐性关系问题。"
    },
    {
      id: "p5",
      title: "私有化大模型微调 (LoRA) 与评测",
      scenario: "让开源小模型（7B/8B）具备公司内部特有的代码风格或文书格式。",
      stack: ["Unsloth/PEFT", "Hugging Face Hub", "MLflow"],
      difficulties: ["数据集清洗与构造", "防灾难性遗忘", "评测指标设计"],
      criteria: "在特定任务集上，微调后的8B模型表现超过GPT-3.5，并输出一份WandB训练报告。"
    },
    {
      id: "p6",
      title: "基于 vLLM 的高并发推理服务",
      scenario: "为全公司提供统一的 LLM API 网关，支持高并发。",
      stack: ["vLLM", "Docker", "Nginx", "Prometheus"],
      difficulties: ["KV Cache优化", "Continuous Batching", "Token流式传输"],
      criteria: "使用Locust压测，在单卡A10G上实现每秒输出2000+ tokens，并能在Grafana看到实时显存占用和QPS曲线。"
    },
    {
      id: "p7",
      title: "集成 OAuth2 鉴权的企业 API 网关",
      scenario: "安全的对外 AI 能力开放平台。",
      stack: ["Kong/APISIX", "OAuth2 (Auth0/Keycloak)", "Python Middleware"],
      difficulties: ["JWT Token解析", "按租户(Tenant)进行Rate Limiting"],
      criteria: "未带Token的请求直接401拒绝；普通用户限制每分钟10次调用；VIP用户无限制。"
    },
    {
      id: "p8",
      title: "端到端 AI 可观测性平台",
      scenario: "监控生产环境 Agent 的回答质量与成本。",
      stack: ["LangSmith/Phoenix", "OpenTelemetry"],
      difficulties: ["全链路Tracing", "Embedding可视化降维监控", "异常检测"],
      criteria: "当某个Trace中RAG检索到的文档相关性低于阈值时，自动触发告警。"
    }
  ] as ProjectItem[],

  interviewQuestions: [
    {
      module: "AI Coding",
      question: "如何使用Cursor/Windsurf实现Spec-Driven Development?",
      answer: "编写清晰的Markdown Spec文档（包含Context、Requirements、Tech Stack），使用Composer/Flow导入Spec，让AI一次性生成项目骨架或核心逻辑，而非逐行对话。"
    },
    {
      module: "Low-Code",
      question: "Dify/Coze与LangChain开发的Agent有何区别？",
      answer: "Dify/Coze提供可视化编排、内置RAG/工具库，适合快速验证与业务人员参与；LangChain更灵活，适合复杂逻辑、深度定制与系统集成。企业级落地常结合两者（Dify做编排，LangChain做复杂节点）。"
    },
    {
      module: "Multimodal",
      question: "多模态大模型在本地生活场景有哪些典型应用？",
      answer: "菜单识别与结构化、用户上传图片评价分析、基于环境图的店铺推荐、商品图文一致性校验等。"
    },
    {
      module: "RAG",
      question: "如何解决“文档切分导致语义截断”的问题？",
      answer: "能提到：Overlap（重叠窗口）、按语义分段（Semantic Chunking）、Parent Document Retriever（索引小块返回大块）。"
    },
    {
      module: "RAG",
      question: "如何评估RAG系统的检索质量？",
      answer: "能说出指标：Hit Rate（命中率）、MRR（平均倒数排名）；能提到Ragas框架的Faithfulness和Answer Relevancy。"
    },
    {
      module: "Agent",
      question: "如何防止Agent陷入死循环或消耗过多Token？",
      answer: "设置Max Iterations（最大迭代次数）、Max Execution Time、检测重复动作；在System Prompt中加入“无法解决则停止”的指令。"
    },
    {
      module: "Agent",
      question: "Function Calling生成的参数格式不对怎么办？",
      answer: "使用Pydantic进行运行时校验；开启Reflexion机制，将错误信息回传给LLM让其自我修正；使用支持Strict JSON Mode的模型。"
    },
    {
      module: "Fine-tuning",
      question: "LoRA中的Rank r和Alpha参数有什么关系？",
      answer: "Rank决定参数量，Alpha是缩放因子。通常Alpha设置为Rank的2倍或1倍，Scale = Alpha / Rank。Alpha越大，新增权重的影响越大。"
    },
    {
      module: "KG",
      question: "什么情况下应该用GraphRAG而不是普通RAG？",
      answer: "当问题涉及跨文档的实体关系跳跃（Multi-hop）、全局性总结（Global Summary）或需要发现隐性关联时，GraphRAG优势明显。"
    },
    {
      module: "Deployment",
      question: "vLLM为什么比Hugging Face Generate快？",
      answer: "核心在于PagedAttention（分页注意力机制），解决了KV Cache显存碎片化问题，支持Continuous Batching（连续批处理）。"
    },
    {
      module: "Integration",
      question: "如何设计一个支持流式输出（Streaming）的API？",
      answer: "使用Server-Sent Events (SSE)或WebSocket。在FastAPI中使用StreamingResponse，并yield生成器内容。"
    },
    {
      module: "Vector DB",
      question: "IVF_FLAT和HNSW索引的区别是什么？",
      answer: "IVF_FLAT是倒排索引，内存占用低但需训练；HNSW是基于图的索引，查询速度极快但内存占用高。生产环境通常首选HNSW。"
    }
  ] as InterviewQuestion[],

  tips: [
    {
      title: "Cursor 最佳实践：.cursorrules",
      category: "IDE技巧",
      description: "在项目根目录创建 .cursorrules 文件，定义项目的编码规范、Tech Stack和偏好。Cursor 会在每次生成代码时自动读取，极大提升生成代码的准确性和风格一致性。",
      content: "示例内容：\n- You are an expert in React, Tailwind, and Shadcn UI.\n- Always use lucide-react for icons.\n- Prefer functional components and hooks.\n- Use 'interface' for object definitions."
    },
    {
      title: "Prompt-Driven Development (PDD)",
      category: "开发模式",
      description: "不要直接写代码，先写 Spec。创建一个 specs/ 目录，用 Markdown 详细描述功能需求、API 接口定义和数据结构。然后将 Spec 文件拖入 Cursor Composer，让 AI 一键生成实现。",
      content: "PDD 流程：\n1. Write specs/feature-x.md\n2. Review & Refine Spec with AI\n3. Generate Code from Spec\n4. Manual Review & Testing"
    },
    {
      title: "n8n AI Agent 快速搭建",
      category: "自动化",
      description: "利用 n8n 的 'AI Agent' 节点，结合 'Vector Store' 和 'Tools'，可以快速搭建一个具备联网搜索、数据库查询能力的 AI 助手，并通过 Webhook 暴露给飞书/钉钉使用。",
      content: "核心节点：\n- AI Agent (Orchestrator)\n- OpenAI Chat Model\n- Window Buffer Memory\n- Vector Store Tool"
    },
    {
      title: "v0.dev + Cursor 极速 UI 开发",
      category: "UI开发",
      description: "先用 v0.dev 生成高质量的 UI 组件代码（支持 Tailwind + Shadcn），然后复制 `npx shadcn@latest add` 命令或代码块到 Cursor 中，进行逻辑对接。比手写 UI 快 10 倍。",
      content: "流程：v0 生成界面 -> Copy 代码 -> Cursor 粘贴 -> 添加业务逻辑 -> 调试"
    },
    {
      title: "Coze/Bisheng 插件开发技巧",
      category: "平台集成",
      description: "当内置插件不满足需求时，使用Python/Node.js编写自定义插件。在Bisheng中，可以通过自定义Code节点处理复杂数据清洗或外部API鉴权，弥补低代码平台灵活性不足。",
      content: "场景：ERP鉴权接口对接、复杂Excel报表生成、非标加密算法实现。"
    }
  ] as TipItem[],

  platforms: [
    {
      name: "Bisheng (毕昇)",
      type: "Open Source LLM DevOps",
      description: "面向企业级的开源大模型应用开发平台，集成了工作流编排、RAG、Agent构建与模型管理。",
      strengths: ["企业级权限管理", "文档解析能力强", "支持自定义代码节点", "完全开源可私有化"],
      integration: ["支持自定义API插件", "Kubernetes部署", "国产模型适配好"],
      devFocus: "二次开发重点：自定义Operator开发、前端组件扩展、鉴权模块对接"
    },
    {
      name: "Dify",
      type: "LLM App Development",
      description: "目前最流行的开源LLM应用开发平台，提供直观的Prompt编排与RAG管道。",
      strengths: ["UX体验极佳", "插件生态丰富", "API接口标准化", "社区活跃"],
      integration: ["DSL导出/导入", "外部工具API对接", "内嵌Web站点"],
      devFocus: "二次开发重点：Tool工具贡献、后端API扩展、多租户逻辑定制"
    },
    {
      name: "Coze (扣子)",
      type: "No-Code AI Bot Platform",
      description: "字节跳动推出的AI Bot开发平台，以其强大的插件生态和工作流编排著称。",
      strengths: ["插件生态极强", "多模态支持好", "免费资源丰富", "发布渠道多"],
      integration: ["SDK集成", "API调用", "飞书/微信生态打通"],
      devFocus: "开发重点：Workflow编排技巧、Plugin插件开发（API封装）、长期记忆数据库设计"
    },
    {
      name: "n8n",
      type: "Workflow Automation",
      description: "基于节点的自动化工作流工具，近期强化了AI Agent构建能力。",
      strengths: ["连接器（Integrations）最丰富", "逻辑控制极其灵活", "自托管友好", "AI Chain支持"],
      integration: ["任何支持HTTP的系统", "数据库直连", "本地文件系统"],
      devFocus: "开发重点：复杂业务流逻辑实现、Error Handling机制、Custom Node开发"
    }
  ] as PlatformItem[],

  platformComparisons: [
    {
      name: "Dify",
      extensionLimit: "✅ 强。支持 HTTP/OpenAPI 标准工具扩展，代码节点支持 Python/JS。开源版可深度魔改后端逻辑。",
      costModel: "💰 开源版免费 (需自备算力/Token)。云端版按 Team Plan 收费，适合中小团队快速验证。",
      deployment: "Docker / K8s / Source",
      fitFor: "需要深度定制逻辑、私有化部署、对 UI/UX 要求高的企业内部应用。"
    },
    {
      name: "Bisheng (毕昇)",
      type: "Open Source LLM DevOps",
      extensionLimit: "✅ 中/强。设计之初即面向企业，支持自定义 Operator 算子，但生态相对较小，文档略少。",
      costModel: "💰 开源版免费。提供企业版商业支持（SLA保障、定制开发）。",
      deployment: "Docker / K8s",
      fitFor: "对文档解析（OCR/PDF）要求高、信创国产化环境、强权限管控的 B 端场景。"
    },
    {
      name: "Coze (扣子)",
      type: "No-Code AI Bot Platform",
      extensionLimit: "⚠️ 中。只能通过 Plugin (API) 扩展，无法修改平台底层逻辑。代码节点有运行环境限制 (Sandbox)。",
      costModel: "💸 免费额度高，但企业版按 Token/调用量收费。数据主要存储在云端 (私有化部署门槛极高)。",
      deployment: "SaaS (主要) / 私有化 (昂贵)",
      fitFor: "快速构建原型、C 端流量产品、依赖字节/飞书生态的轻量级 Bot。"
    }
  ] as PlatformComparison[]
};
