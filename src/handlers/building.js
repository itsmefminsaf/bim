export const GET = (req, res) => {
  return res.status(200).json({ message: "Get all building data" });
};

export const POST = (req, res) => {
  const { name } = req.body || {};
  if (!name) {
    return res
      .status(400)
      .json({ message: "Please provide all mandatory data" });
  }
  return res.status(201).json({ message: `Created building data ${name}` });
};

export const PUT = (req, res) => {
  const id = req.params.id;
  return res.json({ message: `Update ${id}` });
};

export const DELETE = (req, res) => {
  const id = req.params.id;
  return res.json({ message: `Delete ${id}` });
};
